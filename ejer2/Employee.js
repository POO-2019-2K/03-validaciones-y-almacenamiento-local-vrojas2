export default class Employee {
    constructor(employee) {
      this._date = employee.date;
      this._hora = employee.hora;
      this._name = employee.name.toUpperCase();
      this._months = [
        "Ene", "Feb", "Mar", "Abr",
        "May", "Jun", "Jul", "Ago",
        "Sep", "Oct", "Nov", "Dic"
      ];
      this._diasS = [
        "Lunes", "Martes", "Miércoles",
        "Jueves", "Viernes", "Sábado","Domingo"
      ];
    }
  
    get date() {
      return this._date;
    }

    get hora() {
      return this._hora;
    }

    get name() {
      return this._name;
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

    getDiaSemana(){
      let fecha = this._date.getDay();
      return fecha;
    }
  
    getAge() {
      let oneDay = 24 * 60 * 60 * 1000;
      let oneYear = oneDay * 365;
      let differenceMs = new Date() - this._date;
      let age = Math.trunc(differenceMs / oneYear);
  
      return age;
    }
  }