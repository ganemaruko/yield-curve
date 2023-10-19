use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn hello() {
    alert("hello, world!");
}

#[wasm_bindgen]
extern "C" {
    pub fn alert(name: &str);
}
