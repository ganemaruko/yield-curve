pub enum HolidayHandling {
    /// No adjustment.
    None,
    /// The holiday is moved to the previous business day.
    Preceding,
    /// The holiday is moved to the previous business day unless that day falls in the previous calendar month, in which case it is moved to the following business day.
    ModifiedPreceding,
    /// The holiday is moved to the next business day.
    Following,
    /// The holiday is moved to the following business day unless that day falls in the next calendar month, in which case it is moved to the preceding business day.
    ModifiedFollowing,
}

pub enum Tenor {
    // business day.
    BusinessDay,
    /// day
    Day,
    /// week
    Week,
    /// month
    Month,
    /// year
    Year,
}
