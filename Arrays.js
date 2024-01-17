/*ARRAYS es una estructura de datos(cualquier tipo de dato) 
que permite almacenar varios elementos en una sola variable*/
//console.log(array[array.length-1]) encontrar el ultimo elemento

const array=new Array(5)

array[0]=6.2
array[1]='♥C++'
array[2]={Marca:"BMV"}
array[3]=[1,2,3,4,5]
console.log(array)
 

//agregando elementos a un array
const arreglo=['html','tuco','perro']
arreglo[arreglo.length]='REACT'
console.log(arreglo)


//MANIPULANDO ARRAYS
let frutas=["papaya","piña","mandarina","manzana","pera","platano","manzana","pera","uva"]

//filtrando elementos iguales
const resultado=frutas.filter(x=>x=="manzana")
console.log(resultado)

//cambiando elementos distintos ah iguales
const respuesta=frutas.map(x=>{if(x=="manzana")return "pera"})
console.log(respuesta)

//cambiando todos los elementos ah partir de cierto indice
/*const respuesta2=frutas.fill("mango",3)
console.log(respuesta2)*/

//encontrando un elemento
const respuesta3=frutas.find(x=>x=="mandarina")
console.log(respuesta3)

//encontrando un indice por el elemento
const resultado2=frutas.findIndex(x=>x=="platano")
console.log(resultado2)

//agregando un elemento a un array al final
const resultado4=frutas.push("cereza")
console.log(resultado4)
console.log(frutas)

//agregando un elemento a un array al inicio
const resultado5=frutas.unshift("ciruela")
console.log(resultado5)
console.log(frutas)

//cortando y reemplazando un elemento index cantidad  y que agrego
const reemplazando=frutas.slice( 0,1,"palta")
console.log(frutas)