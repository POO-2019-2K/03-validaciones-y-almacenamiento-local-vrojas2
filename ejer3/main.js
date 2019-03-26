import Empleado from "./Empleado.js";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let empleado = new Empleado(
      document.querySelector("#Empleado"),
      document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");

     if(form.checkValidity() === true) {
      let name = document.querySelector("#name").value;
      let numTrabajador = document.querySelector("#numTrabajador").value;
      let sBirthday = document.querySelector("#birthday").value;
      let sDateContratacion = document.querySelector("#dateContratacion").value;
      let sueldo = document.querySelector("#sueldo").value;
      sBirthday = sBirthday.split("-");
      sDateContratacion = sDateContratacion.split("-");

      let birthday = new Date(sBirthday[0], sBirthday[1] - 1, sBirthday[2]);
      let dateContratacion = new Date(sDateContratacion[0], sDateContratacion[1] - 1, sDateContratacion[2]);

      let objEmployee = {
        name: name,
        numTrabajador: numTrabajador,
        birthday: birthday,
        dateContratacion: dateContratacion,
        sueldo: sueldo,
      }

      let employee = new Employee(objEmployee);

      empleado.addEmployee(employee);

     }
      
    });
  }
}

let m = new Main();