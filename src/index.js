import validator from "./validator.js";

console.log(validator);

let inputCardNumber = document.getElementById("inputCardNumber");
let numberTotal = "";


document
  .getElementById("buttonVali")
  .addEventListener("click", validarCardIngreso);

function validarCardIngreso() {
  numberTotal = inputCardNumber.value;
  const valid = validator.isValid(numberTotal);
  console.log(valid);
  if (valid == true) {
    alert("tarjeta valida");
  } else {
    alert("tarjeta invalida");
  }
  
}

