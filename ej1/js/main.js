/* 
## Ejercicio #1
Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
Ejemplo del arreglo : [3, 5, 7, 1, 6]*/ 
let numeros = ["3", "5", "7", "1", "6"];
let ulnumeros = document.getElementById("ulnumeros");
console.log(numeros);
for (let index = 0; index < numeros.length; index++) {
 
  
    ulnumeros.innerHTML += numeros[index];
}
console.log(Math.max(3, 5, 7, 1, 6));





