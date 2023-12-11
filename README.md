# yield-curve

## Folder Structure

```
.
├── .github
│   └── workflows
│       └── rust.yml
├── .gitignore
├── README.md
└── apps
    ├── web
    │   ├── .gitignore
    │   ├── build.ts
    │   ├── index.html
    │   ├── index.ts
    │   ├── local_hosting.ts
    │   ├── node_modules
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   ├── src
    │   ├── tsconfig.json
    │   ├── web.md
    │   └── webpack.config.js
    └── yield_curve_wasm
        ├── .gitignore
        ├── .vscode
        ├── Cargo.lock
        ├── Cargo.toml
        ├── README.md
        ├── core
        ├── interpolator
        ├── target
        ├── tenor
        ├── wasm
        └── wasm.md
```

### apps/web

### apps/yield_curve_wasm

- Yield curve. library written by Rust.

Please see [docs](https://ganemaruko.github.io/yield-curve/core/index.html).
