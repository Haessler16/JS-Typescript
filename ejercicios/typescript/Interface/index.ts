enum Color{
    Azul = "Azul",
    Rojo = "Rojo"
}

interface Reactangulo{
    ancho: number,
    alto: number,
    color: Color
}

let rect:Reactangulo={
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
}

function area(r:Reactangulo):number{
    return r.alto * r.ancho
}

const areaRect = area(rect)

rect.toString = function(){
    return `Rectangulo de color ${this.color}`
}

console.log(rect.toString());
