import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";

const pkg = require("./package.json");
const libraryName = "axios-ts";

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, format: "umd", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  external: ["lodash"],
  watch: {
    include: "src/**"
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve(),
    sourceMaps()
  ]
};
