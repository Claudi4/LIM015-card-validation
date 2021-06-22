import validator from "./validator.js";

console.log(validator);

let inputCardNumber = document.getElementById("inputCardNumber");
let numberTotal = "";
const containerShowTrue= document.getElementById("containerShowTrue");
containerShowTrue.style.display = "none";
const containerShowFalse= document.getElementById("containerShowFalse");
containerShowFalse.style.display = "none";
const pageBox = document.getElementById("pageBox");
pageBox.style.display ="none";


document
  .getElementById("buttonVali")
  .addEventListener("click", validarCardIngreso);

function validarCardIngreso() {
  containerShowTrue.style.display = "none";
  containerShowFalse.style.display = "none";
  numberTotal = inputCardNumber.value;
  inputCardNumber.value = validator.maskify(inputCardNumber.value);
  const valid = validator.isValid(numberTotal);
  console.log(valid);
  if (valid == true) {
    pageBox.style.display ="flex";
    containerShowTrue.style.display = "inherit";
  } else {
    pageBox.style.display ="flex";
    containerShowFalse.style.display = "inherit";
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

