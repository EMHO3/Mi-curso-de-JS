//STRING
//TYPEOF indica el tipo de dato
let paco=typeof "gondola"
console.log(paco)

let b= typeof 3.14
console.log(b)
//NUMBER (CASO ESPECIAL)
let c= typeof NaN
console.log(c)

//Objeto  (caso especial)
let a=typeof["abd","dwa","fasa"]
console.log(a)

//objeto (caso especialñ 2)
let k= typeof new Date()
console.log(k)

//objeto (caso especialñ 3)
let q= typeof null
console.log(q)

//FUNCTION
let y=typeof function(){}
console.log(y)

let datoquemedan=3.14
if(typeof datoquemedan ==="string"){
    console.log("El dato que me dan es un String")
}else{
    console.log("pide que te den un string")
}




//INSTANCE OF devuelve tru o false no se puede hacer en un null
let r=[1,2,3,4,5,6]
let t=new Date()
let u=new Set()
let p=new Map()
let ñ=null
console.log(r instanceof Array)
console.log(r instanceof Number)


