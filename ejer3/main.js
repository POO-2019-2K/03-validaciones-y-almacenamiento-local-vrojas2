import Gasto from "./Gasto.js";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let empleado = new Gasto(
      document.querySelector("#Empleado"),
      document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");

     if(form.checkValidity() === true) {
      let tipo = document.querySelector("#tipo").value;
      let concepto = document.querySelector("#concepto").value;
      let monto = document.querySelector("#monto").value;
      let sDate = document.querySelector("#fecha").value;
      sDate = sDate.split("-");

      let date = new Date(sDate[0], sDate[1] - 1, sDate[2]);

      let objEmployee = {
        date: date,
        tipo: tipo,
        concepto: concepto,
        monto: monto
      }

      let employee = new Employee(objEmployee);

      empleado.addEmployee(employee);

     }
      
    });
  }
}

let m = new Main();