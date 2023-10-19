/**
 * @link https://zenn.dev/hedrall/articles/esbuild-dev-env-20211202
 */
import * as fs from "fs";
import * as path from "path";
import { build, BuildOptions, context } from "esbuild";

// 環境変数を確認
const NODE_ENV = process.env.NODE_ENV ?? "development";
const isDev = NODE_ENV === "development";
const watch = process.env.WATCH === "true" || false;
const metafile = process.env.META_FILE === "true" || false;

// webpackのdefine pluginと同じ
const define: BuildOptions["define"] = {
  // コード上の `process.env.NODE_ENV` を `development` などで置き換える
  "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
};
const plugins = [
  {
    name: "onBuildEnd",
    setup(build) {
      let count = 0;
      build.onEnd((result) => {
        if (count++ === 0) console.log("first build:", result);
        else console.log("subsequent build:", result);
      });
    },
  },
];
const cont = context({
  define,
  // Reactのメインファイル
  entryPoints: [path.resolve(__dirname, "src/index.tsx")],
  bundle: true,
  // ビルドされたバンドルの出力先
  outfile: "public/index.js",
  minify: !!process.env.MIN || !isDev,
  sourcemap: true,
  platform: "browser",
  target: ["chrome58"],
  treeShaking: true,
  loader: { ".jpg": "file", ".png": "file", ".svg": "file" },
  //   watch: watch && {
  //     // watchモードで起動したい場合は、再ビルドのcallbackを渡す
  //     onRebuild(err, result) {
  //       console.log(`rebuild.`);
  //     },
  //   },
  plugins: plugins,
})
  .then((result) => {
    result.watch();
    console.log(`ビルド完了`);
  })
  .catch(() => process.exit(1));
