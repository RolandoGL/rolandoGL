"use strict";
let isActive = false;
let number1 = 11;
let number2 = 12;
let palabra = "Hola mundo";
let var1 = null;
let array1 = [1, 2, 3, 4, 5];
let array2 = ["w", "e"];
array2.forEach(element => {
});
let programador = {
    name: "Rolando",
    edad: 24,
    tecnologias: ["js", "CSS", "HTML"],
    soltero: null
};
if (isActive) {
    console.log("Activando");
}
else
    console.log("desactivado");
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma);
console.log(palabra.includes("a"));
let animal = {
    name: "chencho",
    age: 2,
    color: "gris",
    peso: 2
};
function describeAnimal(animal) {
    console.log(`Hola soy ${animal.name}, tengo ${animal.age}, soy color ${animal.color} y peso ${animal.peso}`);
}
describeAnimal(animal);
class Peliculas {
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectarEnCine() {
        console.log(`${this.nombre} se esta proyectando`);
    }
}
const pelicula = new Peliculas("Ironman", ["ironman"], ["ironman"]);
pelicula.proyectarEnCine();
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
    sortear() {
        return `Para ${this.nombre} el ticket ${this.numero}`;
    }
}
let sorteo = new Sorteo("Rolando");
sorteo.setNumero(1);
sorteo.sortear();
