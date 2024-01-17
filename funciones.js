/*function pato(parametro1,parametro2){
  lineadecodigodelafuncion;
  lineadecodigodelafuncion;
  lineadecodigodelafuncion;
}
 
 esto es la sintaxis basica de una funcion*/

function suma(x,y){
    return x+y
}
let respuesta= suma(5,6)
console.log(respuesta)



const temperatura=76
function transformarAcelscius(farenheit){
    return (5/9) *(farenheit-32)
}
const respuesta2=transformarAcelscius(temperatura);
console.log('la temperatura en C es de',parseInt(respuesta2))