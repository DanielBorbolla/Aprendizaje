let nombre = prompt("ingresa tu nombre: ");
let cambio = "";
let a = 0;
let e = 0;
let Vi = 0;
let o = 0;
let u = 0;
let total = 0;
for (i=0; i<nombre.length; i++){
    switch (nombre[i]){
        case "a":
            cambio += 1
            a ++
        break
        case "e":
            cambio += 2
            e ++
        break
        case "i":
            cambio += 3
            Vi ++
        break
        case "o":
            cambio += 4
            o ++
        break
        case "u":
            cambio += 5
            u ++
        break
        default:
            cambio += nombre[i]
        break
    }
}
total = (a+e+Vi+o+u);
    console.log(cambio)
    console.log("se cambiaron "+ a + " a")
    console.log("se cambiaron "+ e + " e")
    console.log("se cambiaron "+ Vi + " i")
    console.log("se cambiaron "+ o + " o")
    console.log("se cambiaron "+ u + " u")
    console.log("en total se cambiaron se cambiaron "+ total + " vocales")