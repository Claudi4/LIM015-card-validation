const validator = {
  isValid: function (numberTotal) {
    let arrayDeNumerosDeTarjeta = Array.from(numberTotal);
    let arrayDeNumerosPares = [];
    let sumaTotal = 0; 
    let reciduo = 0;
    console.log(arrayDeNumerosDeTarjeta);

    arrayDeNumerosDeTarjeta = arrayDeNumerosDeTarjeta.reverse();

    console.log(arrayDeNumerosDeTarjeta);

    for (let i = 1; i < arrayDeNumerosDeTarjeta.length; i = i + 2) {
        arrayDeNumerosPares.push(Number(operarNumero(arrayDeNumerosDeTarjeta[i])));
        sumaTotal = sumaTotal + Number(operarNumero(arrayDeNumerosDeTarjeta[i]));
    }
    console.log(arrayDeNumerosPares);
    console.log(numberTotal);
    console.log(arrayDeNumerosDeTarjeta);
    console.log(sumaTotal);
    for (let i = 0; i <arrayDeNumerosDeTarjeta.length; i=i +2){
        sumaTotal = sumaTotal + Number(arrayDeNumerosDeTarjeta[i]);
    }
    console.log(sumaTotal);
    reciduo = sumaTotal % 10;
    if (reciduo == 0) {
        return true;
    }else{
      return false;
    }
    function operarNumero(num) {
      let vl = num * 2;
      if (vl > 9) {
          return vl - 9;
      } else {
          return vl;
      }
  }
  

    
  },

};

export default validator;
