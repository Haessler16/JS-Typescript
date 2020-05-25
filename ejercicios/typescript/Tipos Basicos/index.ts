//Boolean
let sera: boolean = true;
sera = false;
    // sera= "gojasa"

//Numbers
let numerador:number = 42
let denominador:number = 6
    // numerador = true
let response = numerador / denominador

console.log(response);

//Strins
let nombre:string = "thovim"
let saludo = `hola soy ${nombre}`

//Arreglos
let personas:string[] = ["Isa", "Raul", "Vero"];
personas.push("bum")
console.log(personas);

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers=[2, "aja", 5, "oga"]
console.log(peopleAndNumbers);

//Enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let color: Color = Color.Azul
console.log(`mi color favorito es ${color}`);

//Any
let bum:any = "joker"
bum = {type: "wrapper"}

//Object
let comodin:object = {type: "object", bum: ()=>"aja"}


