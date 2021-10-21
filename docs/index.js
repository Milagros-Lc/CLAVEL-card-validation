
import validator from './validator.js';

let footer = document.getElementById('footer');
let container = document.getElementById('containerEnvio');
let containerSlider = document.getElementById('containerSlider');
let productosInicio = document.getElementById('productosInicio');
let botonIniciar = document.getElementById('btnIniciarSesion');
let botonIniciarSesion, inputUsuario, seccionIniciarSesion,
    formInicio, sms, productos;

container.style.visibility = "hidden";
container.style.height = "10px";

/////////////////////Detalle  de pedido/////////////////

let seccionNotaPedido = document.getElementById('notaPedido');
let divContenedorNotaPedido = document.createElement('div');
seccionNotaPedido.appendChild(divContenedorNotaPedido);


let divContenedor = document.createElement('div');
seccionNotaPedido.appendChild(divContenedor);

let imgSlogan = document.createElement('img');
divContenedorNotaPedido.appendChild(imgSlogan);
imgSlogan.src = "https://image.flaticon.com/icons/png/512/44/44594.png";
imgSlogan.setAttribute('class', 'imgSlogan');


let slogan = document.createElement('p');
let textoSlogan = document.createTextNode('Tu pago es 100% seguro en nuestra plataforma');
slogan.appendChild(textoSlogan);
divContenedorNotaPedido.appendChild(slogan);
slogan.setAttribute('class', 'slogan');

let tituloNotaPedido = document.createElement('h3');
let textotituloNotaPedido = document.createTextNode('Mis productos:');
tituloNotaPedido.appendChild(textotituloNotaPedido);
divContenedorNotaPedido.appendChild(tituloNotaPedido);
tituloNotaPedido.setAttribute('class', 'tituloNotaPedido');


let hrDetalle = document.createElement('hr');
divContenedorNotaPedido.appendChild(hrDetalle);
hrDetalle.setAttribute('class', 'hrDetalle');


productos = document.createElement('div');
divContenedorNotaPedido.appendChild(productos);
productos.setAttribute('class', 'notaProductos');

let imgProductos = document.createElement('img');
productos.appendChild(imgProductos);
imgProductos.setAttribute("class", "imgProductos");


let tituloDetalle = document.createElement('h3');
let textoTituloDetalle = document.createTextNode('Detalle del pedido:');
tituloDetalle.appendChild(textoTituloDetalle);
divContenedorNotaPedido.appendChild(tituloDetalle);
tituloDetalle.setAttribute('class', 'tituloDetalle');


let descripcionDetalle = document.createElement('div');
divContenedorNotaPedido.appendChild(descripcionDetalle);
descripcionDetalle.setAttribute('class', 'descripcionDetalle');

let subTotal = document.createElement('p');
let textoSubTotal = document.createTextNode('SubTotal');
subTotal.appendChild(textoSubTotal);
descripcionDetalle.appendChild(subTotal);
subTotal.setAttribute("class", "subTotal");

let precio = document.createElement('p');
let textoPrecio = document.createTextNode('');
precio.appendChild(textoPrecio);
descripcionDetalle.appendChild(precio);
precio.setAttribute("class", "precio");

let brDetalle = document.createElement('br');
descripcionDetalle.appendChild(brDetalle);


let total = document.createElement('p');
let textoTotal = document.createTextNode('Total:');
total.appendChild(textoTotal);
descripcionDetalle.appendChild(total);
total.setAttribute("class", "total");

let preciot = document.createElement('p');
let textoPreciot = document.createTextNode('');
preciot.appendChild(textoPreciot);
descripcionDetalle.appendChild(preciot);
preciot.setAttribute("class", "precio");
let catalogos = document.getElementById('catalogos');

function iniciarSesion() {

    productosInicio.style.display = "none";
    catalogos.style.display = "none"
    containerSlider.style.display = "none";


    seccionIniciarSesion = document.createElement('section');

    document.body.appendChild(seccionIniciarSesion);
    document.body.insertBefore(seccionIniciarSesion, footer);
    seccionIniciarSesion.setAttribute('class', 'iniciarSesion');
    formInicio = document.createElement('div');
    seccionIniciarSesion.appendChild(formInicio);
    formInicio.setAttribute('class', 'formInicio')


    let correo = document.createElement('label');
    let textoCorreo = document.createTextNode('Correo Electrónico');
    correo.appendChild(textoCorreo);
    formInicio.appendChild(correo);
    correo.setAttribute('class', 'labelFormulario');

    inputUsuario = document.createElement('input');
    formInicio.appendChild(inputUsuario);
    inputUsuario.setAttribute('class', 'inputFormulario');

    let contraseña = document.createElement('label');
    let textoContraseña = document.createTextNode('Contraseña');
    contraseña.appendChild(textoContraseña);
    formInicio.appendChild(contraseña);
    contraseña.setAttribute('class', 'labelFormulario');

    let inputContraseña = document.createElement('input');
    formInicio.appendChild(inputContraseña);
    inputContraseña.setAttribute('class', 'inputFormulario');


    let btnSesion = document.createElement('button');
    let textoBotonIni = document.createTextNode('Iniciar Sesión');
    btnSesion.appendChild(textoBotonIni);
    formInicio.appendChild(btnSesion);
    btnSesion.setAttribute('id', 'buttonIniciarSesion');
    botonIniciarSesion = document.getElementById('buttonIniciarSesion');

    sms = document.createElement('label');
    let textosms = document.createTextNode('');
    sms.appendChild(textosms);
    formInicio.appendChild(sms);
    sms.setAttribute('class', 'labelNumeroValido');

    botonIniciarSesion.addEventListener('click', mostrarInicio);


}

botonIniciar.addEventListener('click', iniciarSesion);


function mostrarInicio() {


    if (inputUsuario.value == "milagros" || inputUsuario.value == "daniel" || inputUsuario.value == "deysi") {

        seccionIniciarSesion.style.display = "none";
        containerSlider.style.display = "block";
        productosInicio.style.display = "block";
        catalogos.style.display = "block"
        botonIniciar.innerHTML = "Hola Milagros!"

    } else
        sms.innerHTML = "* Ingrese datos válidos o Registrese";
}
///////////////////////////////////////////////////////////

let comprarProduct = document.getElementById('botonProducto1');
comprarProduct.addEventListener('click', comprarPrimerProducto);

function comprarPrimerProducto() {
    containerSlider.style.display = "none";
    productosInicio.style.display = "none";

    container.style.visibility = "visible";
    container.style.height = "800px";

    imgProductos.src = "https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw47b897bd/images/hi-res/SKU/SKU_2441/564565_swatch.jpg?sw=585&sh=585&sm=fit";


    precio.innerHTML = "S/.485.00";
    preciot.innerHTML = "S/.485.00";

}


let comprarProduct2 = document.getElementById('botonProducto2');
comprarProduct2.addEventListener('click', comprarSegundoProducto);

function comprarSegundoProducto() {
    containerSlider.style.display = "none";
    productosInicio.style.display = "none";

    container.style.visibility = "visible";
    container.style.height = "900px";

    imgProductos.src = "https://falabella.scene7.com/is/image/FalabellaPE/16237620_1?wid=800&hei=800&qlt=70";


    precio.innerHTML = "S/.165.00";
    preciot.innerHTML = "S/.165.00";

}

let comprarProduct3 = document.getElementById('botonProducto3');
comprarProduct3.addEventListener('click', comprarTercerProducto);

function comprarTercerProducto() {
    containerSlider.style.display = "none";
    productosInicio.style.display = "none";

    container.style.visibility = "visible";
    container.style.height = "900px";

    imgProductos.src = "https://media.vogue.mx/photos/5ec0a8a61b6433d045148de0/1:1/w_3000,h_3000,c_limit/shampoo--sin-sal-kerastase.jpg";


    precio.innerHTML = "S/.95.00";
    preciot.innerHTML = "S/.95.00";

}

let comprarProduct4 = document.getElementById('botonProducto4');
comprarProduct4.addEventListener('click', comprarCuartoProducto);

function comprarCuartoProducto() {
    containerSlider.style.display = "none";
    productosInicio.style.display = "none";

    container.style.visibility = "visible";
    container.style.height = "900px";

    imgProductos.src = "https://static.beautytocare.com/media/catalog/product/cache/global/image/650x650/85e4522595efc69f496374d01ef2bf13/e/s/estee-lauder-advanced-time-zone-night-wrinkle-cream-50ml.jpg";


    precio.innerHTML = "S/.265.00";
    preciot.innerHTML = "S/.265.00";

}


///////////agregando nodos creados a section Formulario////////////

let sectionFormulario = document.querySelector('#formularioTarjeta');
let progressBar = document.getElementById('progressBar');
let divContenedorDeFormulario;
let idFormulario;
let divDireccion;
let divResultado;
let inputDepartamento;
let inputProvincia;
let inputDistrito;
let inputDireccion;

divContenedorDeFormulario = document.createElement('div');
sectionFormulario.appendChild(divContenedorDeFormulario);
divContenedorDeFormulario.setAttribute('class', 'divFormulario');
divContenedorDeFormulario.setAttribute('id', 'idFormulario');
idFormulario = document.getElementById("idFormulario");
divContenedorDeFormulario.style.display = "none";

paginaDireccionEnvio();

//creando nodos a section Formulario
let tituloFormularioTarjeta = document.createElement('h3');
let textoTituloFormulario = document.createTextNode('Método de Pago');
tituloFormularioTarjeta.appendChild(textoTituloFormulario);
divContenedorDeFormulario.appendChild(tituloFormularioTarjeta);
tituloFormularioTarjeta.setAttribute("class", "tituloMetodoPago");
//rayita :D
let hr = document.createElement('hr');
divContenedorDeFormulario.appendChild(hr);
hr.setAttribute('class', 'hrRayita');

//agregar div para el logo de la tarjeta
let divLogoTarjeta = document.createElement('div');
divContenedorDeFormulario.appendChild(divLogoTarjeta);
//agregando label nombre del titular
let nombreLabelTitularDeTarjeta = document.createElement('label');
let textoLabelTitularDeTarjeta = document.createTextNode('Titular de la Tarjeta:');
nombreLabelTitularDeTarjeta.appendChild(textoLabelTitularDeTarjeta);
divContenedorDeFormulario.appendChild(nombreLabelTitularDeTarjeta)
nombreLabelTitularDeTarjeta.setAttribute('class', 'labelFormulario')
//agregando input nombre del titular
let nombreInputTitularDeTarjeta = document.createElement('input');
divContenedorDeFormulario.appendChild(nombreInputTitularDeTarjeta)
nombreInputTitularDeTarjeta.setAttribute('class', 'inputFormulario')
//Label de mensaje filtrar
let mensajeIngresar = document.createElement('label');
let mensaje1 = document.createTextNode("");
mensajeIngresar.appendChild(mensaje1);
divContenedorDeFormulario.appendChild(mensajeIngresar);
mensajeIngresar.setAttribute('class', 'labelNumeroValido');


validarLetras(nombreInputTitularDeTarjeta);

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
//agregando inputs
let InputNumeroDeTarjeta = [];
let creditCardNumber = [];
let digitosDeTarjetaConcatenados = "";
for (let i = 1; i <= 4; i++) {
    InputNumeroDeTarjeta[i] = document.createElement('input');
    divContenedorInputNumero.appendChild(InputNumeroDeTarjeta[i]);
    InputNumeroDeTarjeta[i].setAttribute('class', 'inputNumeroTarjeta');
    InputNumeroDeTarjeta[i].setAttribute('id', 'inputGrupo' + i);
    InputNumeroDeTarjeta[i].setAttribute('maxlength', '4')

    let logoTarjeta;
    let logoTarjeta1;
    let logoTarjeta2;
    InputNumeroDeTarjeta[i].addEventListener("keyup", (e) => {


        let filtrarNumero = e.target.value;
        InputNumeroDeTarjeta[i].value = filtrarNumero.replace(/\s/g, "").replace(/\D/g, "");


        if (InputNumeroDeTarjeta[i] === InputNumeroDeTarjeta[1] && filtrarNumero === "4") {
            divLogoTarjeta.innerHTML = "";
            logoTarjeta = document.createElement("img");
            divLogoTarjeta.appendChild(logoTarjeta);
            logoTarjeta.src = 'https://www.oroyfinanzas.com/files/2015/05/visa.png';
            logoTarjeta.setAttribute('class', 'logoTarjeta')

        } else
            if (InputNumeroDeTarjeta[i] === InputNumeroDeTarjeta[1] && filtrarNumero === "5") {
                divLogoTarjeta.innerHTML = "";
                logoTarjeta1 = document.createElement("img");
                divLogoTarjeta.appendChild(logoTarjeta1);
                logoTarjeta1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png';
                logoTarjeta1.setAttribute('class', 'logoTarjeta')
            } else
                if (InputNumeroDeTarjeta[i] === InputNumeroDeTarjeta[1] && filtrarNumero === "3") {
                    divLogoTarjeta.innerHTML = "";

                    logoTarjeta2 = document.createElement("img");
                    divLogoTarjeta.appendChild(logoTarjeta2);
                    logoTarjeta2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuXM5Y3YROkVOBgXRIrLqj5ubnItA4ESEiqyNbatfFRJts3c8jzZA6AQo6X_RLysFyrU&usqp=CAU';
                    logoTarjeta2.setAttribute('class', 'logoTarjeta')
                } else



                    if (InputNumeroDeTarjeta[i] === InputNumeroDeTarjeta[1] && filtrarNumero === "") {
                        divLogoTarjeta.innerHTML = "";
                    }
    });
}
//creando select para mes  
let selectorMes = document.createElement("select");
const mes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
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
//creando select para añoo  
let selectorAño = document.createElement("select");
const año = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
let optiona = [];
let textoOptiona = [];
for (let i = 0; i < año.length; i++) {
    optiona[i] = document.createElement("option");
    optiona[i].setAttribute("value", "value" + (i + 1));
    textoOptiona[i + 1] = document.createTextNode(año[i]);
    optiona[i].appendChild(textoOptiona[i + 1]);
    selectorAño.appendChild(optiona[i]);
}
divContenedorDeFormulario.appendChild(selectorAño)
selectorAño.setAttribute('class', 'selectorAño')
//agregando label CVV
let nombreLabelCvv = document.createElement('label');
let textoLabelCvv = document.createTextNode('Cvv:');
nombreLabelCvv.appendChild(textoLabelCvv);
divContenedorDeFormulario.appendChild(nombreLabelCvv)
nombreLabelCvv.setAttribute('class', 'labelFormulario')
//agregando input CVV
let nombreInputCvv = document.createElement('input');
divContenedorDeFormulario.appendChild(nombreInputCvv)
nombreInputCvv.setAttribute('class', 'inputCvv')
nombreInputCvv.setAttribute('maxlength', '4')
nombreInputCvv.addEventListener("keyup", (e) => {
    let filtrarNumero = e.target.value;
    nombreInputCvv.value = filtrarNumero.replace(/\s/g, "").replace(/\D/g, "");
});
//Label de mensaje filtrar
let mensajeCVV = document.createElement('label');
let mensaje2 = document.createTextNode("");
mensajeCVV.appendChild(mensaje2);
divContenedorDeFormulario.appendChild(mensajeCVV);
mensajeCVV.setAttribute('class', 'labelNumeroValido');
//creando boton para validar
let btnValidarDatos = document.createElement('button');
let textoButton = document.createTextNode('Validar Datos');
btnValidarDatos.appendChild(textoButton);
divContenedorDeFormulario.appendChild(btnValidarDatos);
btnValidarDatos.setAttribute('class', 'buttonValidar');
btnValidarDatos.setAttribute('id', 'buttonValidarDatos');
let botonValidar = document.getElementById('buttonValidarDatos');

//Label de mensaje filtrar
let mensajeValidacion = document.createElement('label');
let mensaje = document.createTextNode("");
mensajeValidacion.appendChild(mensaje);
divContenedorDeFormulario.appendChild(mensajeValidacion);
mensajeValidacion.setAttribute('class', 'labelNumeroValido');
//funcion Validar digitos de la tarjeta

function validarTarjeta() {

    if (nombreInputTitularDeTarjeta.value != "") {
        mensajeIngresar.innerHTML = "";
        for (let i = 1; i <= 4; i++) {
            digitosDeTarjetaConcatenados += InputNumeroDeTarjeta[i].value;
        }
        if (digitosDeTarjetaConcatenados !== "") {
            creditCardNumber = digitosDeTarjetaConcatenados.split('');
            let nuevoVariable = digitosDeTarjetaConcatenados.split('');
            let valorBoleano;



            if (nuevoVariable.length == 16 && nuevoVariable[0] == 4) {

                if ((nombreInputCvv.value.split('')).length == 3) {

                    mensajeCVV.innerHTML = ""
                    mensajeValidacion.innerHTML = "";
                    valorBoleano = validator.isValid(nuevoVariable.reverse());
                    if (valorBoleano === true) {

                        progressBar.setAttribute('value', '100');

                        divContenedorDeFormulario.style.display = "none";
                        paginaPaso4(creditCardNumber);

                    } else {


                        mensajeValidacion.innerHTML = "   * Ingrese numero de tarjeta valida.";

                        for (let i = 1; i <= 4; i++) {
                            InputNumeroDeTarjeta[i].value = "";
                        }

                        digitosDeTarjetaConcatenados = "";

                    }
                } else {
                    mensajeCVV.innerHTML = " *Ingrese CVV 3 digitos"
                    //////hjfgjhvjhvjhvjvjvjgchgcfh
                }
            }

            if (nuevoVariable.length == 16 && nuevoVariable[0] == 5) {
                valorBoleano = validator.isValid(nuevoVariable.reverse());
                if (valorBoleano === true) {

                    progressBar.setAttribute('value', '100');

                    divContenedorDeFormulario.style.display = "none";
                    paginaPaso4(creditCardNumber);

                } else {


                    mensajeValidacion.innerHTML = "   * Ingrese numero de tarjeta valida.";

                    for (let i = 1; i <= 4; i++) {
                        InputNumeroDeTarjeta[i].value = "";
                    }

                    digitosDeTarjetaConcatenados = "";

                }
            } else {
                mensajeValidacion.innerHTML = "   *Ingrese numero tarjeta valida";
            }



            if (nuevoVariable.length == 15 && nuevoVariable[0] == 3) {
                if ((nombreInputCvv.value.split('')).length == 4) {
                    mensajeCVV.innerHTML = "";

                    valorBoleano = validator.isValid(nuevoVariable.reverse());
                    if (valorBoleano === true) {

                        progressBar.setAttribute('value', '100');

                        divContenedorDeFormulario.style.display = "none";
                        paginaPaso4(creditCardNumber);

                    } else {


                        mensajeValidacion.innerHTML = "   * Ingrese numero de tarjeta valida.";

                        for (let i = 1; i <= 4; i++) {
                            InputNumeroDeTarjeta[i].value = "";
                        }

                        digitosDeTarjetaConcatenados = "";

                    }
                } else {
                    mensajeCVV.innerHTML = " *Ingrese CVV 4 digitos";
                }

            } else {
                mensajeValidacion.innerHTML = "   *Ingrese numero de tarjeta Validaa";

                /*  mensajeValidacion.innerHTML="   * Ingrese numero de tarjeta valida."; */

                for (let i = 1; i <= 4; i++) {
                    InputNumeroDeTarjeta[i].value = "";
                }

                digitosDeTarjetaConcatenados = "";
            }
        }
        else {

            mensajeValidacion.innerHTML = "   *Ingrese numero de tarjeta ";
        }
    } else {
        mensajeIngresar.innerHTML = "   *Ingrese nombre del titular ";
    }
}
//agregando 

function paginaDireccionEnvio() {



    divDireccion = document.createElement('div');
    sectionFormulario.appendChild(divDireccion);
    divDireccion.setAttribute("class", "divDireccion");

    let tituloDireccion = document.createElement('h3');
    let textotitulo = document.createTextNode('Dirección de Envio');
    tituloDireccion.appendChild(textotitulo);
    divDireccion.appendChild(tituloDireccion);
    tituloDireccion.setAttribute("class", "tituloMetodoPago");

    let hr2 = document.createElement('hr');
    divDireccion.appendChild(hr2);
    hr2.setAttribute('class', 'hrRayita');


    let departamento = document.createElement('label');
    let textoDepartamento = document.createTextNode("Departamento:");
    departamento.appendChild(textoDepartamento);
    divDireccion.appendChild(departamento);
    departamento.setAttribute('class', 'labelFormulario');


    inputDepartamento = document.createElement('input');
    divDireccion.appendChild(inputDepartamento);
    inputDepartamento.setAttribute('class', 'inputFormulario');
    inputDepartamento.setAttribute('id', 'iddepartamento');


    validarLetras(inputDepartamento);

    let provincia = document.createElement('label');
    let textoProvincia = document.createTextNode("Provincia:");
    provincia.appendChild(textoProvincia);
    divDireccion.appendChild(provincia);
    provincia.setAttribute('class', 'labelFormulario');


    inputProvincia = document.createElement('input');
    divDireccion.appendChild(inputProvincia);
    inputProvincia.setAttribute('class', 'inputFormulario');

    validarLetras(inputProvincia);

    let distrito = document.createElement('label');
    let textoDistrito = document.createTextNode("Distrito:");
    distrito.appendChild(textoDistrito);
    divDireccion.appendChild(distrito);
    distrito.setAttribute('class', 'labelFormulario');


    inputDistrito = document.createElement('input');
    divDireccion.appendChild(inputDistrito);
    inputDistrito.setAttribute('class', 'inputFormulario');

    validarLetras(inputDistrito);

    let direccion = document.createElement('label');
    let textoDireccion = document.createTextNode("Dirección:");
    direccion.appendChild(textoDireccion);
    divDireccion.appendChild(direccion);
    direccion.setAttribute('class', 'labelFormulario');

    inputDireccion = document.createElement('input');
    divDireccion.appendChild(inputDireccion);
    inputDireccion.setAttribute('class', 'inputFormulario');

    /* validarLetras(inputDireccion); */

    let referencia = document.createElement('label');
    let textoReferencia = document.createTextNode("Referencia(Ejemplo: A la espalda del grifo Primax)");
    referencia.appendChild(textoReferencia);
    divDireccion.appendChild(referencia);
    referencia.setAttribute('class', 'labelFormulario');

    let inputReferencia = document.createElement('input');
    divDireccion.appendChild(inputReferencia);
    inputReferencia.setAttribute('class', 'inputFormulario');

    validarLetras(inputReferencia);

    let btnGuardarDireccion = document.createElement('button');
    let textoBotonGuardar = document.createTextNode('Guardar Dirección');
    btnGuardarDireccion.appendChild(textoBotonGuardar);
    divDireccion.appendChild(btnGuardarDireccion);
    btnGuardarDireccion.setAttribute('class', 'buttonValidar');
    btnGuardarDireccion.setAttribute('id', 'buttonGuardarDireccion');
    let botonGuardarDireccion = document.getElementById('buttonGuardarDireccion');

    botonGuardarDireccion.addEventListener('click', paginaPago);

}

function paginaPago() {

    idFormulario.style.display = "block";
    divDireccion.style.display = "none";
    progressBar.setAttribute('value', '66');

}

//Agregando funcion validar al escuchador
botonValidar.addEventListener('click', validarTarjeta);

function paginaPaso4(creditCardNumber) {
    //aca va ocultar la section productos

    divContenedorNotaPedido.style.display = "none";

    let divPublicidad = document.createElement('div');
    divContenedor.appendChild(divPublicidad);
    divPublicidad.setAttribute("class", "divPublicidad");


    let labelPublicidad = document.createElement('h2');
    let textoPublicidad = document.createTextNode('Tenemos los mejores productos  ')
    labelPublicidad.appendChild(textoPublicidad);
    divPublicidad.appendChild(labelPublicidad);
    labelPublicidad.setAttribute("class", "publicidad");

    let linkCatalogos = document.createElement('a');
    let textoLink = document.createTextNode('Ver catálogos')
    linkCatalogos.appendChild(textoLink);
    divPublicidad.appendChild(linkCatalogos);
    linkCatalogos.setAttribute("href", "#");

    /*  let br = document.createElement('br');
     divPublicidad.appendChild(br);
 
  */

    let publicidad = document.createElement('img');
    divPublicidad.appendChild(publicidad);
    publicidad.src = "https://image.isu.pub/191009182643-dd2c4dbfa68f1fd11d2ac290c8c9a879/jpg/page_216.jpg";
    publicidad.setAttribute('class', 'imgPublicidad');





    //divContenedorNotaPedido.style.display = "none";

    divResultado = document.createElement('div');
    sectionFormulario.appendChild(divResultado);
    divResultado.setAttribute("class", "divResultado");

    let tituloResultado = document.createElement('h3');
    let textoTituloResultado = document.createTextNode('Transacción Exitosa:');
    tituloResultado.appendChild(textoTituloResultado);
    divResultado.appendChild(tituloResultado);
    tituloResultado.setAttribute("class", "tituloMetodoPago");

    let hr1 = document.createElement('hr');
    divResultado.appendChild(hr1);
    hr1.setAttribute('class', 'hrRayita');

    let labelDireccion = document.createElement('label');
    let textoDireccionCompleta = document.createTextNode('Dirección de Envío: ' + inputDepartamento.value + " - " + inputProvincia.value + " - " + inputDistrito.value + " - " + inputDireccion.value);
    labelDireccion.appendChild(textoDireccionCompleta);
    divResultado.appendChild(labelDireccion);
    labelDireccion.setAttribute('class', 'labelFormulario');

    let nombreTitular = document.createElement('label');
    let textoNombre = document.createTextNode('Nombre del Titular: ' + nombreInputTitularDeTarjeta.value);
    nombreTitular.appendChild(textoNombre);
    divResultado.appendChild(nombreTitular);
    nombreTitular.setAttribute('class', 'labelFormulario');

    let numeroTarjeta = document.createElement('label');

    let textotarjeta = document.createTextNode('Número de Tarjeta: ' + validator.maskify(creditCardNumber));
    numeroTarjeta.appendChild(textotarjeta);
    divResultado.appendChild(numeroTarjeta);
    numeroTarjeta.setAttribute('class', 'labelFormulario');


    let tipoDeTarjeta = document.createElement('label');
    let textoTipo = document.createTextNode('Tipo de Tarjeta: ');
    tipoDeTarjeta.appendChild(textoTipo);
    divResultado.appendChild(tipoDeTarjeta);
    tipoDeTarjeta.setAttribute('class', 'labelFormulario');


    let divLogo = document.createElement('div');
    divResultado.appendChild(divLogo);
    let logoTarjetaResul = document.createElement("img");
    divLogo.appendChild(logoTarjetaResul);
    logoTarjetaResul.setAttribute('class', 'logoTarjeta1');



    if (creditCardNumber[0] == 4) {
        logoTarjetaResul.src = 'https://www.oroyfinanzas.com/files/2015/05/visa.png';

    } else
        if (creditCardNumber[0] == 5) {
            logoTarjetaResul.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png';
        } else
            if (creditCardNumber[0] == 3) {
                logoTarjetaResul.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuXM5Y3YROkVOBgXRIrLqj5ubnItA4ESEiqyNbatfFRJts3c8jzZA6AQo6X_RLysFyrU&usqp=CAU';

            }
    let br = document.createElement('br');
    divResultado.appendChild(br);
    let br2 = document.createElement('br');
    divResultado.appendChild(br2);



    let mensajeResultado = document.createElement('label');
    let textoMensaje = document.createTextNode("* Tiempo estimado: 4 a 5 días en llegar a su destino. ");
    mensajeResultado.appendChild(textoMensaje);
    divResultado.appendChild(mensajeResultado);
    mensajeResultado.setAttribute('class', 'labelFormulario');

    let br3 = document.createElement('br');
    divResultado.appendChild(br3);
    let br4 = document.createElement('br');
    divResultado.appendChild(br4);
    let br5 = document.createElement('br');
    divResultado.appendChild(br5);


    let mensajeGracias = document.createElement('h4');
    let textoGracias = document.createTextNode(" Gracias por tu compra! ");
    mensajeGracias.appendChild(textoGracias);
    divResultado.appendChild(mensajeGracias);
    mensajeGracias.setAttribute('style', 'text-aling:center');

}
//pagina direccion de envio

function validarLetras(texto) {
    texto.addEventListener("keyup", (e) => {

        let filtrarTexto = e.target.value;
        texto.value = filtrarTexto.replace(/([|°<>!"#$%&/()=?:.*@¡\-'[;{}_])/g, "").replace(/([0-9])/g, "").toUpperCase();

    });
}
