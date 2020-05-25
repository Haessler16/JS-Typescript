function add(a:number, b:number):number{
    return a + b
}
const sum = add(6, 6)
console.log(sum);

//Funciones que Retornan Funciones
function Adder(a: number):(number)=>number{
    return function(b: number){
        return b + a
    }
}

let reSum = Adder(15)
let by = reSum(5)

console.log(by);

//Parametros no Obligatorios
function fullName(first: string, last?: string): string{
    return `I´m ${first} ${last}`
}

const nombre = fullName("Thovim", "Smith")
console.log(nombre);



