import Employee from "./Employee.js";

export default class Gasto {
  constructor(tableEmpleado, tableInfo) {
    this._tableEmpleado = tableEmpleado;
    this._tableInfo = tableInfo;
    this._transporte = 0;
    this._alimento = 0;
    this._hospedaje = 0;
    this._otro = 0;
    this._employees = [];
    
    this._initTables();
  }

  _initTables() {
    let gastos = JSON.parse(localStorage.getItem("gastos"));
    if(gastos === null) {
        return;
    }
    gastos.forEach((gasto, index) => {
        gasto.fecha = new Date(gasto.fecha);
        this._showInTable(new Gasto(gasto));
       
    });
}

  _showInTable(gasto) {
    let row = this._tableAgenda.insertRow(-1);

    let cellFecha = row.insertCell(0);
    let cellTipo = row.insertCell(1);
    let cellConcepto = row.insertCell(2);
    let cellMonto = row.insertCell(3);

    cellFecha.innerHTML = gasto.getFecha();
    cellTipo.innerHTML = gasto.tipo;
    cellConcepto.innerHTML = gasto.concepto;
    cellMonto.innerHTML = gasto.monto;

    if(gasto.tipo === "transporte") {
        this._transporte = Number(gasto.monto) + this._transporte;
        this._tableInfo.rows[0].cells[1].innerHTML = this._transporte;
    }
    else if(gasto.tipo === "alimento") {
        this._alimento = Number(gasto.monto) + this._alimento;
        this._tableInfo.rows[1].cells[1].innerHTML = this._alimento;
    }
    else if(gasto.tipo === "hospedaje") {
      this._hospedaje = Number(gasto.monto) + this._hospedaje;
      this._tableInfo.rows[2].cells[1].innerHTML = this._hospedaje;
  }
    else if(gasto.tipo === "otro") {
        this._otro = Number(gasto.monto) + this._otro;
        this._tableInfo.rows[3].cells[1].innerHTML = this._otro;
    }

    let objGasto = {
        fecha: gasto.fecha,
        tipo: gasto.tipo,
        concepto: gasto.concepto,
        monto: gasto.monto
    }
    this._gastos.push(objGasto);
  }
  addGasto(gasto) {
    this._showInTable(gasto);
    localStorage.setItem("gastos", JSON.stringify(this._gastos));
  }
}

