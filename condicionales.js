let edad=62
if (edad>=18 && edad <=60) {
    console.log("Puede pasar")
}
else if(edad<=18){
    console.log("Eres menor y no puedes ingresa")
}
else{
    console.log("No puede pasar pq eres muy mayor y no se recomienda")
}
//IF ESTRUCTURA BASICA
/*if (condition) {
    
}else if(){

}else{
    
}*/

//SWITCH

let Musica='Punk'

switch (Musica) {
    case 'Punk':
        console.log("te recomiendo los ramones")
        break;

    default:
        'No conozco esa musica pero te recomiendo salsa'
        break;
}




//IF ANIDADO
let edad2=18
let nacionalidad='Peruano'
let pasaporte=true

if(edad2 >=18){
    console.log("Tienes edad para viajar")
    if (nacionalidad=="Peruano") {
        console.log("ducomentacion aprobado tramite 2")
        if (pasaporte) {
            console.log("Puede viajar , buen viaje")
        } else(
            console.log("pasaporte obligatorio")
        )
    }else(
        console.log("debes presentar el DNI de tu pais de origen")
    )
}else(
    console.log("Debes ser +18 para viajar solo")
)