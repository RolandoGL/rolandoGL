// declaracion de variables

let isActive: boolean  = false

let number1: number = 11
let number2: number = 12

let palabra: string = "Hola mundo"

let var1: number| null| undefined = null

let array1: number[] = [1,2,3,4,5]
let array2: string[] = ["w", "e"]

array2.forEach(element => {
    
});

// type personalizado
type Programador = {
    name:String,
    edad: number,
    tecnologias: string[],
    soltero?:boolean | null
}

// uso del type personalizado
let programador: Programador = {
    name:"Rolando",
    edad: 24,
    tecnologias: ["js", "CSS", "HTML"],
    soltero: null
}


if(isActive){
    console.log("Activando")
}else console.log("desactivado")

function suma(num1: number, num2: number): number{
    return num1 + num2
}

console.log(suma)

console.log( palabra.includes("a") )



// interfaz
interface Animal{
    name: string,
    age : number,
    color: string,
    peso : number  
}

// uso de la interfaz
let animal: Animal = {
    name: "chencho",
    age : 2,
    color: "gris",
    peso : 2
}

function describeAnimal( animal: Animal){
    console.log(`Hola soy ${animal.name}, tengo ${animal.age}, soy color ${animal.color} y peso ${animal.peso}`)
}

describeAnimal(animal)






















class Peliculas{
    nombre?       : string
    protagonistas?: string[]
    actores?      : string[]

    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre        = nombre
        this.protagonistas = protagonistas
        this.actores       = actores
    }

    proyectarEnCine(){
        console.log( `${this.nombre} se esta proyectando` )
    }
}

const pelicula = new Peliculas("Ironman", ["ironman"], ["ironman"])

pelicula.proyectarEnCine()






// genericos
class  Sorteo<T>{
    private numero?: T

    constructor( private nombre:string){}

    setNumero(numero: T){
        this.numero = numero
    }

    getNumero(){
        return this.numero
    }


    public sortear():string{
        return `Para ${this.nombre} el ticket ${this.numero}`
    }
}

let sorteo = new Sorteo<number>("Rolando")

sorteo.setNumero(1)

sorteo.sortear()


const arrowFunction = (): string =>{
    return "";
}