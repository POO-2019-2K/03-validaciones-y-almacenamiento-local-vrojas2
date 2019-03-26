import Employee from "./Employee.js";

export default class Consulta {
  constructor(tableCosulta, tableInfo) {
    this._tableCosulta = tableCosulta;
    this._tableInfo = tableInfo;
    this._citaLunes = 0;
    this._citaMartes = 0;
    this._citaMiercoles = 0;
    this._citaJueves = 0;
    this._citaViernes = 0;
    this._citaSabado = 0;
    this._citaDomingo =  0;

    this._employees = [];
    
    this._initTables();
  }
  
  //new Date(employee.date)
  //localStorage.clear(employee.date);

  _initTables() {
    let employees = JSON.parse(localStorage.getItem("employees"));
    if(employees === null){
      return;
    }
    employees.forEach((employee, index) => {
      employee.date = new Date(employee.date);
      
      this._showInTable(new Employee(employee));
    });
  }

  _showInTable(employee) {
    let row = this._tableCosulta.insertRow(-1);

    let cellDate = row.insertCell(0);
    let cellHora = row.insertCell(1);
    let cellName = row.insertCell(2);

    cellDate.innerHTML = employee.getDateAsString();
    cellName.innerHTML = employee.name;
    cellHora.innerHTML = employee.hora;

    this._numEmployees++; // this._numEmployees = this._numEmployees + 1
    this._sumAge += employee.getAge(); // this._sumAge = this._sumAge + employee.getAge()
    this._contSueldo++;


    if ( employee.getDiaSemana() === 0) {
      this._tableInfo.rows[1].cells[1].innerHTML = this._citaLunes++;
    }
    else if (employee.getDiaSemana() === 1){
      this._tableInfo.rows[2].cells[1].innerHTML = this._citaMartes++;
    }
    else if (employee.getDiaSemana() === 2){
      this._tableInfo.rows[3].cells[1].innerHTML = this._citaMiercoles++;
    }
    else if (employee.getDiaSemana() === 3){
      this._tableInfo.rows[4].cells[1].innerHTML = this._citaJueves++;
    }
    else if (employee.getDiaSemana() === 4){
      this._tableInfo.rows[5].cells[1].innerHTML = this._citaViernes++;
    }
    else if (employee.getDiaSemana() === 5){
      this._tableInfo.rows[6].cells[1].innerHTML = this._citaSabado++;
    }
    else if (employee.getDiaSemana() === 6){
      this._tableInfo.rows[7].cells[1].innerHTML = this._citaDomingo++;
    }
   
    this._tableInfo.rows[4].cells[1].innerHTML = this._promSueldo;

    this._tableInfo.rows[5].cells[1].innerHTML =
      this._sumAge / this._numEmployees;

      let objEmployee = {
        date: employee.date,
        hora: employee.hora,
        name: employee.name,
      }
      this._employees.push(objEmployee);
  }
  addEmployee(employee) {
    this._showInTable(employee);
      localStorage.setItem("employees", JSON.stringify(this._employees));
      console.log(localStorage.getItem("employees"));
  }
}
