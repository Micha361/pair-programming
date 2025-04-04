
export function isLeapYear(year: number): boolean {
    // FIXME: this implementation is wrong!
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        return year % 400 === 0;
      }
      return true;
    }
    return false;
  }