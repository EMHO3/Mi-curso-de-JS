//STRINGS \es simbolo de escape
//  \n para hacer salto de linea
let string='let\'s do it \n esto esta abajo'
let palabra="murcielago"
let texto="otorinolaringologp"
                  //comienza por el caracter 2 y termina en el 9no
let recorte=texto.slice(2,9)//recorta segun el rango que le demos
const ejemplo='los barcos son muyu pesados y veloces'
const resultado=ejemplo.replace('veloces','lentos')//remplaca uno por otro

const texto2='esto es importante . esto tambien . este otro tambien'
const respuesta=texto2.split(' . ')//divide los string en otro elemento

console.log(respuesta)
console.log(resultado)
console.log(recorte)
console.log(string)
console.log(palabra.length)