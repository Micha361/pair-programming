export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};

export function calculateProRataVacationDays(employment: Employment): number {
  const { startDate, untilDate, percentage, vacationDays } = employment;
  const year = startDate.getFullYear();
  const daysInYear = isLeapYear(year) ? 366 : 365;
  const daysWorked = Math.ceil((untilDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const proRataVacationDays = (vacationDays * daysWorked / daysInYear) * (percentage / 100);
  return Math.round(proRataVacationDays * 100) / 100;
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}