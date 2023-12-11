use crate::core::Tenor;

pub fn shift_calendar(size: i64, tenor: Tenor) {
    println!("Hello, shift_calendar!");
}

mod test {
    use crate::core::Tenor;
    use super::shift_calendar;

    #[test]
    fn test_interpolate() {
        shift_calendar(10, Tenor::BusinessDay)
    }
}
