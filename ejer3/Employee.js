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
  
    get numTrabajador() {
      return this._numTrabajador;
    }

    get name() {
      return this._name;
    }
  
    get birthday() {
      return this._birthday;
    }
  
    get dateContratacion() {
      return this._dateContratacion;
    }

    get sueldo() {
      return this._sueldo;
    }

    getBirthdayAsString() {
      let date =
        this._birthday.getDate() +
        "/" +
        this._months[this._birthday.getMonth()] +
        "/" +
        this._birthday.getFullYear();
  
      return date;
    }

    getDateContratacionAsString() {
      let date1 =
        this._dateContratacion.getDate() +
        "/" +
        this._months[this._dateContratacion.getMonth()] +
        "/" +
        this._dateContratacion.getFullYear();
  
      return date1;
    }
  
    getAge() {
      let oneDay = 24 * 60 * 60 * 1000;
      let oneYear = oneDay * 365;
      let differenceMs = new Date() - this._birthday;
      let age = Math.trunc(differenceMs / oneYear);
  
      return age;
    }

    getAntiguedad(){
      let oneDay = 24 * 60 * 60 * 1000;
      let oneYear = oneDay * 365;
      let differenceMs = new Date() - this._dateContratacion;
      let age1 = Math.trunc(differenceMs / oneYear);

      return age1;
    }
  }