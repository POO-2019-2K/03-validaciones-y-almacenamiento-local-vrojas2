import Employee from "./Employee.js";

export default class Empleado {
  constructor(tableEmpleado, tableInfo) {
    this._tableEmpleado = tableEmpleado;
    this._tableInfo = tableInfo;
    this._numEmployees = 0;
    this._sumAge = 0;
    this._contSueldo = 0;
    this._numSueldo1 = 1;
    this._numSueldo2 = 1;
    this._numSueldo3 = 1;
    this._employees = [];
    
    this._initTables();
  }

  _initTables() {
    let employees = JSON.parse(localStorage.getItem("employees"));
    if(employees === null){
      return;
    }
    employees.forEach((employee, index) => {
      employee.birthday = new Date(employee.birthday);
      employee.dateContratacion = new Date(employee.dateContratacion);
      this._showInTable(new Employee(employee));
    });
  }

  _showInTable(employee) {
    let row = this._tableEmpleado.insertRow(-1);

    let cellNumTrabajador = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellBirthday = row.insertCell(2);
    let cellDateContratacion = row.insertCell(3);
    let cellSueldo = row.insertCell(4);
    let cellAge = row.insertCell(5);
    let cellAntiguedad = row.insertCell(6);

    cellNumTrabajador.innerHTML = employee.numTrabajador;
    cellName.innerHTML = employee.name;
    cellBirthday.innerHTML = employee.getBirthdayAsString();
    cellDateContratacion.innerHTML = employee.getDateContratacionAsString();
    cellSueldo.innerHTML = employee.sueldo;
    cellAge.innerHTML = employee.getAge();
    cellAntiguedad.innerHTML = employee.getAntiguedad();

    this._numEmployees++; // this._numEmployees = this._numEmployees + 1
    this._sumAge += employee.getAge(); // this._sumAge = this._sumAge + employee.getAge()
    this._contSueldo++;

    this._promSueldo = Math.trunc( cellSueldo.innerHTML / this._contSueldo);


    if ( employee.sueldo < 10000) {
      this._tableInfo.rows[1].cells[1].innerHTML = this._numSueldo1++;
    } else if (employee.sueldo <= 20000){
      this._tableInfo.rows[2].cells[1].innerHTML = this._numSueldo2++;
      } else if (employee.sueldo > 20000){
        this._tableInfo.rows[3].cells[1].innerHTML = this._numSueldo3++;
      }
   
    this._tableInfo.rows[4].cells[1].innerHTML = this._promSueldo;

    this._tableInfo.rows[5].cells[1].innerHTML =
      this._sumAge / this._numEmployees;

      let objEmployee = {
        name: employee.name,
        numTrabajador: employee.numTrabajador,
        birthday: employee.birthday,
        dateContratacion: employee.dateContratacion,
        sueldo: employee.sueldo
      }
      this._employees.push(objEmployee);
  }
  addEmployee(employee) {
    this._showInTable(employee);
      localStorage.setItem("employees", JSON.stringify(this._employees));
      console.log(localStorage.getItem("employees"));
  }
}
