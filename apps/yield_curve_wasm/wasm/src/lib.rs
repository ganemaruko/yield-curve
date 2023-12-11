use interpolator::interpolator::core::Interpolator;
use interpolator::interpolator::linear_interpolator::LinearInterpolator;
use wasm_bindgen::prelude::*;
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn hello() {
    alert("hello, world!");
}

#[wasm_bindgen]
pub fn interpolate(x1: f64, y1: f64, x2: f64, y2: f64, x: f64) -> f64 {
    let interpolator = LinearInterpolator {
        x: vec![x1, x2],
        y: vec![y1, y2],
    };
    return interpolator.interpolate(x);
}


#[wasm_bindgen]
extern "C" {
    pub fn alert(name: &str);
}
