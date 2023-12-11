use crate::core::Tenor;

pub fn shift_calendar(size: i64, tenor: Tenor) {
    println!("Hello, shift_calendar!");
}

mod test {
    use super::shift_calendar;
    use crate::core::Tenor;

    #[test]
    fn test_interpolate() {
        shift_calendar(10, Tenor::BusinessDay)
    }
}
