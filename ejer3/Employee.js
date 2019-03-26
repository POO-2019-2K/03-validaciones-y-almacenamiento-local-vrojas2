export default class Employee {
    constructor(employee) {
      this._name = employee.name.toUpperCase();
      this._numTrabajador = employee.numTrabajador;
      this._birthday = employee.birthday;
      this._dateContratacion = employee.dateContratacion;
      this._sueldo = employee.sueldo;
      this._months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ];
    }

    get date() {
        return this._date;
    }

    get tipo() {
        return this._tipo;
    }

    get concepto() {
        return this._concepto;
    }

    get monto() {
        return this._monto;
    }

    getDateAsString() {
      let date =
        this._date.getDate() +
        "/" +
        this._months[this._date.getMonth()] +
        "/" +
        this._date.getFullYear();
  
      return date;
    }
  }