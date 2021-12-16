/*/Realizar operaciones con dos numeros

//Solicito dos números al usuario
var num1 = prompt("Ingresa primer número:");
var num2 = prompt("Ingresa segundo número:");

// Se escriben las operaciones convirtiendo los string en valores numericos con parseINT

var suma = parseInt(num1) + parseInt(num2);
var resta = parseInt(num1) - parseInt(num2);
var division = parseInt(num1) / parseInt(num2);
var multiplicacion = parseInt(num1) * parseInt(num2);
var modulo = parseInt(num1) % parseInt(num2);

// Se imprimen los resultados en el html con documentwrite

document.write("El resultado de la suma entre "+ num1 +" y " + num2 + " es: " + suma + ". <br>")
document.write("El resultado de la resta entre "+ num1 +" y " + num2 + " es: " + resta + ". <br>")
document.write("El resultado de la division entre "+ num1 +" y " + num2 + " es: " + division + ". <br>")
document.write("El resultado de la multiplicación entre "+ num1 +" y " + num2 + " es: " + multiplicacion + ". <br>")
document.write("El resultado del módulo entre "+ num1 +" y " + num2 + " es: " + modulo + ". <br>")*/


/*/Crear programa que transforme grados Celsius a Kelvin y Fahrenheit.

var num1 = prompt("Ingresa temperatura en grados Celsius: ");

// Se escriben las ecuaciones de conversión.

var kelvin = parseInt(num1) + 273.15;
var fahrenheit = (parseInt(num1) * 9/5) + 32;

// Se imprimen los resultados en el html con documentwrite

document.write("La equivalencia de " + num1 + " Celsius " + " en grados Kelvin es: " + kelvin + ". <br>");
document.write("La equivalencia de " + num1 + " Celsius " + " en grados Fahrenheit es: " + fahrenheit + ". <br>");*/

//Ejercicio 4, Convertidor de dias a año, semana, dias.

/*/Se solicita ingresar cantidad de dias a usuario.

var dia = prompt("Escriba cantidad de dias: ");

//Calculos de conversion de dias a: año, semana, dias
var dia_sobra_año = dia % 365;
var semana = Math.floor(dia_sobra_año / 7);
var año = Math.floor(dia / 365);
var dia_sobra_semana = dia_sobra_año % 7;

//Se imprimen datos en html con document.write
document.write(año + " año. " + semana + " semana, y " + dia_sobra_semana + " dias.");*/


//Ejercicio 5 (Suma y promedio)

//Se solicita al usuario ingresar datos.
var num1 = parseInt(prompt("Ingrese primer número: "))
var num2 = parseInt(prompt("Ingrese segundo número: "))
var num3 = parseInt(prompt("Ingrese tercer número: "))
var num4 = parseInt(prompt("Ingrese cuarto número: "))
var num5 = parseInt(prompt("Ingrese quinto número: "))


//Operaciones
var suma = num1 + num2 + num3 + num4 + num5;
var promedio = suma / 5;

//Se imprimen datos en html con document.write.

document.write("La suma de todos los números es " + suma + ". <br>");
document.write("El promedio total es " + promedio + ". <br>");



