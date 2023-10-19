import init, { hello } from "wasm-sample";

init().then((_) => {
  hello();
  console.log("OK!");
});
