let text="esto es un parrafo de ejemplo para expresiones regulares 9"
let busqueda=text.search(/regulares/)
console.log(busqueda)

//MODIFICADORES
//i:ignorar mayusculas y minúsculas
//g:buscar en todo el texto pasado
//m:busqueda multilinea


let pattern=/para/i
let resultado=pattern.test(text)
console.log(resultado)

//buscar por rango dentro del texto como texto
let a=/[0-9]/
let b=a.test(text)
console.log(b)

