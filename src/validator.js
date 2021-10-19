const validator = {

  isValid: function (nuevoVariable) {
    let result = false;
    let sumaDigitosDeTarjeta = 0;
    for (let i = 0; i < nuevoVariable.length; i++) {
      let aux = parseInt(nuevoVariable[i]);
      if ((i % 2) !== 0) {
        let indiceMultiplicado = aux * 2;
        aux = indiceMultiplicado >= 10 ? indiceMultiplicado - 9 : indiceMultiplicado;
      }
      sumaDigitosDeTarjeta += aux;
    }
    if (sumaDigitosDeTarjeta > 0 && sumaDigitosDeTarjeta % 10 === 0) {
      result = true;
    }

    return result;
  },

  maskify: function (creditCardNumber) {
    let numeroTarjeta = [...creditCardNumber];
    let numeroCifrado = '#';
    for (let i = 0; i < ((numeroTarjeta.length) - 4); i++) {
      numeroTarjeta[i] = numeroCifrado;
    }
    return String(numeroTarjeta).replace(/,/g, "");
  }
};
/* let mask =  String(numeroTarjeta).replace(/,/g, "").substring(4, numeroTarjeta.length).replace(/\d/g,"*");
let a=numeroTarjeta.substring( numeroTarjeta.length-4); */
    
export default validator;

