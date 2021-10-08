import validator from './validator.js';

console.log(validator);
//creando nodos a section Formulario

let tituloFormularioTarjeta = document.createElement('h2');
let textoTituloFormulario = document.createTextNode('Método de Pago');
tituloFormularioTarjeta.appendChild(textoTituloFormulario);

//agregando nodos creados a section Formulario

let sectionFormulario = document.getElementById('formularioTarjeta');
sectionFormulario.appendChild(tituloFormularioTarjeta);


//agregar div contenedor
let divContenedorDeFormulario = document.createElement('div');
sectionFormulario.appendChild(divContenedorDeFormulario);
divContenedorDeFormulario.setAttribute('class', 'divFormulario');


//agregando label nombre del titular
let nombreLabelTitularDeTarjeta = document.createElement('label');
let textoLabelTitularDeTarjeta = document.createTextNode('Titular de la Tarjeta:');
nombreLabelTitularDeTarjeta.appendChild(textoLabelTitularDeTarjeta);
divContenedorDeFormulario.appendChild(nombreLabelTitularDeTarjeta)
nombreLabelTitularDeTarjeta.setAttribute('class', 'labelFormulario')
//agregando input
let nombreInputTitularDeTarjeta = document.createElement('input');
divContenedorDeFormulario.appendChild(nombreInputTitularDeTarjeta)
nombreInputTitularDeTarjeta.setAttribute('class', 'inputFormulario')

//agregando label numero de tarjeta
let nombreLabelNumeroDeTarjeta = document.createElement('label');
let textoLabelNumeroDeTarjeta = document.createTextNode('Número de la Tarjeta:');
nombreLabelNumeroDeTarjeta.appendChild(textoLabelNumeroDeTarjeta);
divContenedorDeFormulario.appendChild(nombreLabelNumeroDeTarjeta)
nombreLabelNumeroDeTarjeta.setAttribute('class', 'labelFormulario')
//agregando label fecha de vencimiento
let nombreLabelFechaDeVencimiento = document.createElement('label');
let textoLabelFechaDeVencimiento = document.createTextNode('Fecha de Vencimiento:');
nombreLabelFechaDeVencimiento.appendChild(textoLabelFechaDeVencimiento);
divContenedorDeFormulario.appendChild(nombreLabelFechaDeVencimiento)
nombreLabelFechaDeVencimiento.setAttribute('class', 'labelFormulario')



//agregar div contenedor del grupo de inputs

let divContenedorInputNumero = document.createElement('div');
divContenedorDeFormulario.insertBefore(divContenedorInputNumero, nombreLabelFechaDeVencimiento);
divContenedorInputNumero.setAttribute('class', 'divInputNumeroTarjeta');

//agregando input
let nombreInputNumeroDeTarjeta1 = document.createElement('input');
divContenedorInputNumero.appendChild(nombreInputNumeroDeTarjeta1)
nombreInputNumeroDeTarjeta1.setAttribute('class', 'inputNumeroTarjeta')
nombreInputNumeroDeTarjeta1.setAttribute('id', 'inputGrupo1')
nombreInputNumeroDeTarjeta1.setAttribute('maxlength', '4')

//agregando input
let nombreInputNumeroDeTarjeta2 = document.createElement('input');
divContenedorInputNumero.appendChild(nombreInputNumeroDeTarjeta2)
nombreInputNumeroDeTarjeta2.setAttribute('class', 'inputNumeroTarjeta')
nombreInputNumeroDeTarjeta2.setAttribute('id', 'inputGrupo2')
nombreInputNumeroDeTarjeta2.setAttribute('maxlength', '4')
//agregando input
let nombreInputNumeroDeTarjeta3 = document.createElement('input');
divContenedorInputNumero.appendChild(nombreInputNumeroDeTarjeta3)
nombreInputNumeroDeTarjeta3.setAttribute('class', 'inputNumeroTarjeta')
nombreInputNumeroDeTarjeta3.setAttribute('id', 'inputGrupo3')
nombreInputNumeroDeTarjeta3.setAttribute('maxlength', '4')
//agregando input
let nombreInputNumeroDeTarjeta4 = document.createElement('input');
divContenedorInputNumero.appendChild(nombreInputNumeroDeTarjeta4)
nombreInputNumeroDeTarjeta4.setAttribute('class', 'inputNumeroTarjeta')
nombreInputNumeroDeTarjeta4.setAttribute('id', 'inputGrupo4')
nombreInputNumeroDeTarjeta4.setAttribute('maxlength', '4')

//creando select para mes  

let selectorMes = document.createElement("select");
let mes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
let option = [];
let textoOption = [];

for (let i = 0; i < 12; i++) {
    option[i] = document.createElement("option");
    option[i].setAttribute("value", "value" + (i + 1));
    textoOption[i + 1] = document.createTextNode(mes[i]);
    option[i].appendChild(textoOption[i + 1]);
    selectorMes.appendChild(option[i]);
}
divContenedorDeFormulario.appendChild(selectorMes)
selectorMes.setAttribute('class', 'selectorMes')
// creando select para Año

let nombreSeleccionarAño = document.createElement('input');
divContenedorDeFormulario.appendChild(nombreSeleccionarAño)
nombreSeleccionarAño.setAttribute('class', 'selectorAño')
nombreSeleccionarAño.setAttribute('id', 'año')
nombreSeleccionarAño.setAttribute('type', 'number')
nombreSeleccionarAño.setAttribute('max', '2030')
nombreSeleccionarAño.setAttribute('min', '2020')

//agregando label CVV
let nombreLabelCvv = document.createElement('label');
let textoLabelCvv = document.createTextNode('Cvv:');
nombreLabelCvv.appendChild(textoLabelCvv);
divContenedorDeFormulario.appendChild(nombreLabelCvv)
nombreLabelCvv.setAttribute('class', 'labelFormulario')

//agregando input
let nombreInputCvv = document.createElement('input');
divContenedorDeFormulario.appendChild(nombreInputCvv)
nombreInputCvv.setAttribute('class', 'inputCvv')
nombreInputCvv.setAttribute('maxlength', '3')

//creando boton para validar
let btnValidarDatos = document.createElement('button');
let textoButton = document.createTextNode('Validar Datos');
btnValidarDatos.appendChild(textoButton);
divContenedorDeFormulario.appendChild(btnValidarDatos);
btnValidarDatos.setAttribute('class', 'buttonValidar');
btnValidarDatos.setAttribute('id', 'buttonValidarDatos');


let botonValidar = document.getElementById('buttonValidarDatos');

function validarTarjeta() {
    let grupoNumero1 = nombreInputNumeroDeTarjeta1.value;
    let grupoNumero2 = nombreInputNumeroDeTarjeta2.value;
    let grupoNumero3 = nombreInputNumeroDeTarjeta3.value;
    let grupoNumero4 = nombreInputNumeroDeTarjeta4.value;

    let digitosDeTarjetaConcatenados = grupoNumero1 + grupoNumero2 + grupoNumero3 + grupoNumero4;
    let creditCardNumber = digitosDeTarjetaConcatenados.split('');
    let valorBoleano = validator.isValid(creditCardNumber);
    if( valorBoleano == true) {
        alert("tarjeta valida")
    } else {
        alert("tarjeta no valida")
    } 
   // alert(validator.maskify(creditCardNumber));
}
botonValidar.addEventListener('click', validarTarjeta);

//pruebaaaaaaaaaaaaaaaaaaaaaaa aaaaa aaa
let btnPrueba=document.createElement('button');
let textoPrueba=document.createTextNode('Prueba Datos');
btnPrueba.appendChild(textoPrueba);
divContenedorDeFormulario.appendChild(btnPrueba);
btnPrueba.setAttribute('class','buttonValidar');
btnPrueba.setAttribute('id','prueba');


let btnMaskify=document.getElementById('prueba');
function hola(){
    let grupoNumero1=nombreInputNumeroDeTarjeta1.value;
    let grupoNumero2=nombreInputNumeroDeTarjeta2.value;
    let grupoNumero3=nombreInputNumeroDeTarjeta3.value;
    let grupoNumero4=nombreInputNumeroDeTarjeta4.value;

    
 //Numero de tarjeta en un solo arreglo
 let numeroArreglo=grupoNumero1+grupoNumero2+grupoNumero3+grupoNumero4;
 let creditCardNumber = numeroArreglo.split('');
   validator.maskify(creditCardNumber);

}

btnMaskify.addEventListener('click',hola);

//funcion validar

function validarSoloNumero(){

  
        let valueInt = parseInt(nombreInputNumeroDeTarjeta1.value);
        if (!Number.isInteger(valueInt)) {
          console.log("es entero")
        } else {
            nombreInputNumeroDeTarjeta1.value = valueInt;
            console.log("no es entero")
        }
  

}

nombreInputNumeroDeTarjeta1.addEventListener('onfocus',validarSoloNumero);
