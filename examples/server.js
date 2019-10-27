const express = require("express");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("./webpack.config");

const app = express();
const compiler = webpack(webpackConfig);

const Routers = require("./routers");

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: "/__build__/",
    stats: {
      colors: true,
      chunks: false
    }
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

Routers.simple(router);
Routers.base(router);
Routers.error(router);
Routers.extend(router); 
Routers.interceptor(router);
Routers.config(router);
Routers.cancel(router);

app.use(router);

const port = process.env.PORT || 8080;

module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});
