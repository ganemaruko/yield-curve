pub trait Interpolator<X, Y> {
    fn interpolate(&self, value: X) -> Y;
}
