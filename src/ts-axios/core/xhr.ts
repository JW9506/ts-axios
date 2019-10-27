import {
  AxiosRequestConfig,
  AxiosPromise,
  AxiosResponse
} from "../types/index";
import { parseHeaders } from "../helpers/headers";
import { createError } from "../helpers/error";
import { rejects } from "assert";

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((res, rej) => {
    const {
      url,
      method = "get",
      data = null,
      headers,
      responseType,
      timeout,
      cancelToken
    } = config;
    const request = new XMLHttpRequest();
    if (responseType) {
      request.responseType = responseType;
    }
    if (timeout) {
      request.timeout = timeout;
    }
    request.open(method.toUpperCase(), url!, true);
    request.onreadystatechange = function() {
      // 4: client properly receives the response;
      if (request.readyState !== 4) {
        return;
      }
      // if request timeout, status is 0;
      if (request.status === 0) {
        return;
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData =
        responseType !== "text" ? request.response : request.responseText;
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      handleResponse(response);
    };
    request.onerror = function() {
      rej(createError("Network Error", config, null, request));
    };
    request.ontimeout = function() {
      rej(
        createError(
          `Timeout of ${timeout} ms exceeded`,
          config,
          "ECONNABORTED",
          request
        )
      );
    };
    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === "content-type") {
        delete headers[name];
      } else {
        request.setRequestHeader(name, headers[name]);
      }
    });
    if (cancelToken) {
      cancelToken.promise
        .then((reason) => {
          request.abort();
          rej(reason);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    request.send(data);
    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        res(response);
      } else {
        rej(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        );
      }
    }
  });
}
