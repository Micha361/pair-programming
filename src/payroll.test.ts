//- ein 16 jähriger Lernender mit einem Monatsgehalt von 700.-
// ein 18 jähriger Lernender mit einem Monatsgehalt von 1200.-
//ein 21 jähriger Angestellter mit einem Monatsgehalt von 5900.-


import { calculatePayslip, Salary, Deductions  }  from './payroll';


test("ein 16 jähriger Lernender mit einem Monatsgehalt von 700.-"), () => {
const salary: Salary = {
    born:  2008, 
    payday: new Date("2024-1-1"),
    gross: 700,


};
const Payslip = calculatePayslip(salary);
const deductions: Deductions= new Map ([
])
    AHV : 0,
    IV : 0,
    EO : 0,
    PK: 0

};
