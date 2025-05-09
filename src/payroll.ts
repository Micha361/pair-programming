export type Salary = {
  born: number;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
  // TODO: implement

  const {
    born, payday, gross
  } = salary

  //Yearly incomme 
  const anuel = gross * 12

  function calculateage(){
    const age = 2025 - born;
  }
const deductions: Deductions = {
  AHV: 0,
  IV: 0,
  EO: 0,
  ALV: 0,
  NBU: 0,
  PK: 0,
}
if (age>=18){
  deductions.AHV 
}
  const result: Payslip = {
    salary: salary,
    deductions: new Map(),
    totalDeductions: 0.0,
    net: salary.gross,
  };
  return result;
}

