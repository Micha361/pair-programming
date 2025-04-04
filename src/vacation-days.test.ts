import { calculateProRataVacationDays, Employment } from './vacation-days';

describe('calculateProRataVacationDays', () => {
  it('should calculate vacation days for a full-time employment over the whole year', () => {
    const employment: Employment = {
      startDate: new Date('2025-01-01'),
      untilDate: new Date('2025-12-31'),
      percentage: 100,
      vacationDays: 25,
    };
    expect(calculateProRataVacationDays(employment)).toBe(25);
  });

  it('should calculate vacation days for a part-time employment over the whole year', () => {
    const employment: Employment = {
      startDate: new Date('2025-01-01'),
      untilDate: new Date('2025-12-31'),
      percentage: 50, 
      vacationDays: 25,
    };
    expect(calculateProRataVacationDays(employment)).toBe(12.5);
  });

  it('should calculate vacation days for a full-time employment for part of the year', () => {
    const employment: Employment = {
      startDate: new Date('2025-01-01'),
      untilDate: new Date('2025-03-31'),
      percentage: 100,
      vacationDays: 25,
    };
    expect(calculateProRataVacationDays(employment)).toBeCloseTo(6.16, 2);
  });

  it('should calculate vacation days for a part-time employment for part of the year', () => {
    const employment: Employment = {
      startDate: new Date('2025-01-01'),
      untilDate: new Date('2025-03-31'),
      percentage: 70,
      vacationDays: 25,
    };
    expect(calculateProRataVacationDays(employment)).toBeCloseTo(4.32, 2);
  });
});