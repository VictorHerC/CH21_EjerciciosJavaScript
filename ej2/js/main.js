// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:
//Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
let numeros = ["-1", "3", "4", "2", "6"];
let ulnumeros = document.getElementById("ulnumeros");
console.log(numeros);
for (let index = 0; index < numeros.length; index++) {
 
  
    ulnumeros.innerHTML += numeros[index];
}
console.log(Math.min(-1, 3, 4, 2, 6));





