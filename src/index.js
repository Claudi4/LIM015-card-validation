import validator from "./validator.js";

console.log(validator);

let inputCardNumber = document.getElementById("inputCardNumber");
let numberTotal = "";


document
  .getElementById("buttonVali")
  .addEventListener("click", validarCardIngreso);

function validarCardIngreso() {
  numberTotal = inputCardNumber.value;
  inputCardNumber.value = validator.maskify(inputCardNumber.value);
  const valid = validator.isValid(numberTotal);
  console.log(valid);
  if (valid == true) {
    alert("tarjeta valida");
  } else {
    alert("tarjeta invalida");
  }
  
}

let miFormulario = document.querySelector('#miFormulario');
miFormulario.codigo.addEventListener('keypress', function (e){
	if (!soloNumeros(event)){
  	e.preventDefault();
  }
})

//Solo permite introducir numeros.
function soloNumeros(e){
    var key = e.charCode;
    console.log(key);
    return key >= 48 && key <= 57;
}

