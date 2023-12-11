use std::ops::{Add, Div, Mul, Sub};

use super::core::Interpolator;

pub struct LinearInterpolator<X, Y>
where
    Y: From<X>,
{
    pub x: Vec<X>,
    pub y: Vec<Y>,
}

impl LinearInterpolator<f64, f64> {
    pub fn new(x: Vec<f64>, y: Vec<f64>) -> Self {
        if x.len() != y.len() {
            panic!("x and y must have the same length");
        }

        return Self { x, y };
    }
}

impl<X, Y> Interpolator<X, Y> for LinearInterpolator<X, Y>
where
    Y: PartialOrd
        + Copy
        + From<X>
        + Sub<Output = Y>
        + Div<X, Output = Y>
        + Mul<X, Output = Y>
        + Add<Output = Y>,
    X: PartialOrd + Copy + Sub<Output = X> + Mul<Y, Output = Y> + Div<Y, Output = Y>,
{
    fn interpolate(&self, value: X) -> Y {
        for (i, x) in self.x.iter().enumerate() {
            if value < *x {
                let ans: Y = (self.y[i] - self.y[i - 1]) / (self.x[i] - self.x[i - 1])
                    * (value - self.x[i - 1])
                    + self.y[i - 1];
                return ans;
            }
        }
        let ans: Y = value.into();
        return ans;
    }
}

mod test {
    use super::super::core::Interpolator;
    use super::LinearInterpolator;

    #[test]
    fn test_interpolate() {
        let x = vec![1.0, 2.0, 3.0];
        let y = vec![1.0, 2.0, 3.0];
        let interpolator = LinearInterpolator { x, y };
        assert_eq!(interpolator.interpolate(1.5), 1.5);
    }
}
