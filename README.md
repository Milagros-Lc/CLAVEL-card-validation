# CLAVE'L - Porque todxs lo valemos.

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Diseño de experiencia de usuaruario](#3-diseño-de-experiencia-de-usuario)
* [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. Preámbulo

El [algoritmo de Luhn],
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es consta en obtener la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

## 2. Resumen del proyecto

## 2.1 Nombre del producto

CLAVE'L - Porque todas lo valemos.

## 2.2 Definición del producto

CLAVE'L es una tienda online de productos de belleza, un sitio web diseñado especialmente para vender productos u ofrecer servicios mediante
el comercio electrónico. Uno de sus principales beneficios es que este espacio de Internet permite a los vendedores exhibir su mercadería durante
las 24 horas del día, los 7 días de la semana y desde cualquier lugar. Esta aplicación web permite que lxs usuarixs puedan tener una experiencia
más fácil y sencilla para adquirir este tipo de servicio de acuerdo a su necesidad. Esta web se enfocó en la validación de una tarjeta de crédito
para realizar el pago electrónico del servicio seleccionado utilizando el algoritmo de Luhn y la implementación de otra funcionalidad permite ocultar
todos los digitos de la tarjeta ingresada menos los últimos cuatro para mayor seguridad. Para esto, se utilizó HTML, CSS y JavaScript como herramientas.

* Quiénes son los principales usuarios de producto.

Todas las personas mayores de 18 años o adolescentes con el permiso de sus padres, que deseen sentirse y verse mejor cuidando su piel, su cabello, etc. u obsequiando a otra persona por amor o por necesidad.

* Cuáles son los objetivos de estos usuarios en relación con tu producto.

Lograr una compra y un envio seguro con los productos que más deseen.

* Cómo crees que el producto que estás creando está resolviendo sus problemas.

  La aplicación web presentada permite al usuario realizar un pago electrónico seguro mediante la validación de su tarjeta de crédito mientras navega por una interfaz       amigable para adquirir un producto.

### 3. Diseño de experiencia de usuario

** Prototipo en Figma


![formulario2](https://user-images.githubusercontent.com/83854147/138351660-cab08a31-6276-47f2-9ec0-9ca4554caf4c.png)
![formulario 1](https://user-images.githubusercontent.com/83854147/138351645-9543be56-0e05-4e2f-a99a-9b420cbf89b4.png)


* FeedBack 2

Se identificó:  - Que se debía de mejorar las vistas de método de pago separándolas
de la vista de direccion de envío.
- Cambiar el tipo de fuente.

** Prototipo mejorado



![pagina de inicio](https://user-images.githubusercontent.com/83854147/138361688-f628285d-6f86-4cf0-81b5-b9004006f755.png)

![direccion de envio](https://user-images.githubusercontent.com/83854147/138361698-5a92171b-6b80-4d7b-ad93-5e5b28994b50.png)
![metodo de pago](https://user-images.githubusercontent.com/83854147/138361708-754adefa-4149-49d9-b326-b432e7835f82.png)

* FeedBack 3

Se identificó:  - Vistas buenas, claras y accesibles.

PRUEBAS UNITARIAS

![test card-validation](https://user-images.githubusercontent.com/83854147/154399983-75bff6c6-f13b-41a4-aa84-b6054effe9f4.png)

## 4. Objetivos de aprendizaje

### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**

 
- [x] **Modelo de caja (box model): borde, margen, padding**

 
### Web APIs

- [x] **Uso de selectores del DOM**


- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**

 
- [x] **Manipulación dinámica del DOM**



### JavaScript

- [x] **Tipos de datos primitivos**

 

- [x] **Strings (cadenas de caracteres)**

 

- [x] **Variables (declaración, asignación, ámbito)**

 

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**



- [x] **Uso de bucles/ciclos (while, for, for..of)**

 

- [x] **Funciones (params, args, return)**

 

- [x] **Pruebas unitarias (unit tests)**

  
- [x] **Módulos de ECMAScript (ES Modules)**

 

- [x] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages**

 
### UX (User eXperience)

- [x] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [x] **Crear prototipos para obtener feedback e iterar**

- [x] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**


## 5. Criterios de aceptación mínimos del proyecto

- Usa solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].
- Ver el resultado si es válido o no.
- Ocultar todos los dígitos de su número de tarjeta menos los últimos 4 caracteres.
- No debe poder ingresar un campo vacío.


