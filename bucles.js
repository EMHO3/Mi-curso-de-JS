// FOR OF
let tecnologias=["HTML","C++","CSS","PYTHON","JAVA"]

for (tecnologias of tecnologias) {
    console.log(tecnologias)
}



//PARA OBJETOS FOR IN 
const alumno={
    nombre:"brenda",
    edad:25,
    tecnologias2:["html","c++"]
}
          
for (const key in alumno) {
     console.log(alumno[key])
}

//FOR EACH 
let numeros=[1,2,34,5,6,7]

numeros.forEach(numero => {
    console.log(numero)
});

//WHILE
while (condition) {
    break;
}

//ciclo for basico
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/