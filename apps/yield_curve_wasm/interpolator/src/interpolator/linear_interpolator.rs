use super::core::Interpolator;

pub struct LinearInterpolator<X, Y>
where
    Y: From<X>,
{
    pub x: Vec<X>,
    pub y: Vec<Y>,
}

impl<X, Y> Interpolator<X, Y> for LinearInterpolator<X, Y>
where
    Y: From<X>,
{
    fn interpolate(&self, value: X) -> Y {
        let ans: Y = value.into();
        return ans;
    }
}

mod test {
    use super::super::core::Interpolator;
    use super::LinearInterpolator;

    #[test]
    fn test_interpolate() {
        let x = vec![1, 2, 3];
        let y = vec![1, 2, 3];
        let interpolator = LinearInterpolator { x, y };
        assert_eq!(interpolator.interpolate(1), 1);
    }
}
