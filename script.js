function daysOfAYear(year) {
  if (year < 1 || year > 9999) {
    throw new Error("Year must be between 1 and 9999.");
  }

  // Leap year logic:
  // - divisible by 4
  // - not divisible by 100 unless also divisible by 400
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  return isLeapYear ? 366 : 365;
}