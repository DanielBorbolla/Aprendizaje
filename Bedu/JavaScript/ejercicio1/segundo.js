let destino = "cancun";

function segundo (destino){

    switch(destino){
        case 'puebla':
            console.log("$15")
            break

        case 'morelos':
            console.log("$30")
            break

        case 'cancun' || 'mazatlan':
            console.log("$50")
            break

        case 'morelos':
                console.log("$30")
            break

        default :
                console.log(destino + " estará disponible próximamente")
            break
       }

 }    
