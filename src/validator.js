const validator = {
  isValid: function (creditCardNumber) {
    let aux;
    for (let i = 0; i < creditCardNumber.length / 2; i++) {
        aux = creditCardNumber[i];
        creditCardNumber[i] = creditCardNumber[creditCardNumber.length - 1 - i];
        creditCardNumber[creditCardNumber.length - 1 - i] = aux;
    }
    //console.log(creditCardNumber);

    for (let i = 0; i < creditCardNumber.length; i++) {
      if ((i % 2) != 0) {
        let indiceMultiplicado =parseInt(creditCardNumber[i])  * 2;
        if (indiceMultiplicado >= 10) {
          let indiceConvertidoToString = indiceMultiplicado.toString();
          let indiceSeparado = indiceConvertidoToString.split("");
          let resultadoSumaIndice = parseInt(indiceSeparado[0]) + parseInt(indiceSeparado[1]);
          creditCardNumber[i] = resultadoSumaIndice;
        } else {
          creditCardNumber[i] = indiceMultiplicado;
        }
      }
    }
    //console.log(creditCardNumber);
    let sumaDigitosDeTarjeta = 0;
    for (let i = 0; i < creditCardNumber.length; i++) {
      sumaDigitosDeTarjeta = sumaDigitosDeTarjeta + parseInt(creditCardNumber[i]);
    }
    //console.log(sumaDigitosDeTarjeta);
    if (sumaDigitosDeTarjeta % 10 == 0) {
      return true;
    } else {
      return false;
    }

  },


  maskify: function (creditCardNumber) {
    let numeroCifrado = '#';
    for (let i = 0; i < ((creditCardNumber.length) - 4); i++) {
      creditCardNumber[i] = numeroCifrado;
    }
    return (creditCardNumber);
  }

};

export default validator;

