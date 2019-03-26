import Consulta from "./Consulta.js";
import Employee from "./Employee.js";

class Main {
  constructor() {
    let consulta = new Consulta(
      document.querySelector("#Consulta"),
      document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");

     if(form.checkValidity() === true) {
      let name = document.querySelector("#name").value;
      let sDate = document.querySelector("#date").value;
      let hora = document.querySelector("#hora").value;
      sDate = sDate.split("-");

      let date = new Date(sDate[0], sDate[1] - 1, sDate[2]);

      let objEmployee = {
        date: date,
        name: name,
        hora: hora,
      }

      let employee = new Employee(objEmployee);

      consulta.addEmployee(employee);

     }
      
    });
  }
}

let m = new Main();