import Employee from "./Employee.js";

export default class Gasto {
  constructor(tableGasto, tableInfo) {
    this._tableGasto = tableGasto;
    this._tableInfo = tableInfo;
    this._transporte = 0;
    this._alimento = 0;
    this._hospedaje = 0;
    this._otro = 0;
    this._employees = [];
    
    this._initTables();
  }

  _initTables() {
    let employees = JSON.parse(localStorage.getItem("employees"));
    if(employees === null) {
        return;
    }
    employees.forEach((employee, index) => {
        employee.date = new Date(employee.date);
        this._showInTable(new Employee(employee));
       
    });
}

  _showInTable(employee) {
    let row = this._tableGasto.insertRow(-1);

    let cellFecha = row.insertCell(0);
    let cellTipo = row.insertCell(1);
    let cellConcepto = row.insertCell(2);
    let cellMonto = row.insertCell(3);

    cellFecha.innerHTML = employee.getFecha();
    cellTipo.innerHTML = employee.tipo;
    cellConcepto.innerHTML = employee.concepto;
    cellMonto.innerHTML = employee.monto;

    if(employee.tipo === "transporte") {
        this._transporte = Number(employee.monto) + this._transporte;
        this._tableInfo.rows[0].cells[1].innerHTML = this._transporte;
    }
    else if(employee.tipo === "alimento") {
        this._alimento = Number(employee.monto) + this._alimento;
        this._tableInfo.rows[1].cells[1].innerHTML = this._alimento;
    }
    else if(employee.tipo === "hospedaje") {
      this._hospedaje = Number(employee.monto) + this._hospedaje;
      this._tableInfo.rows[2].cells[1].innerHTML = this._hospedaje;
  }
    else if(employee.tipo === "otro") {
        this._otro = Number(employee.monto) + this._otro;
        this._tableInfo.rows[3].cells[1].innerHTML = this._otro;
    }

    let objEmployee = {
        fecha: employee.fecha,
        tipo: employee.tipo,
        concepto: employee.concepto,
        monto: employee.monto
    }
    this._employees.push(objEmployee);
  }
  addEmployee(employee) {
    this._showInTable(employee);
    localStorage.setItem("employees", JSON.stringify(this._employees));
  }
}

