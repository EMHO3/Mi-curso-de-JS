//un objeto en JS ES UNA ESTRUCTURA DE DATOS FORMADOA POR PARES CLAVES VALOR QUE PUEDEN TENER PROPIEDADES Y METODOS
//es una representacion en el codigo de algo real

let auto={
    marca:'toyota',
    modelo:'utroep',
    peso:1000,
    color:'rojo'
}
console.log(auto)
console.log(auto.marca)

const vendedor={
    nombre:"pedro",
    apellido:"castillo",
    habilidadesblandas:["carisma","responsable"],
    vender:function(){
        return "pedro ah vendido una auto"
    },
    nombrecompleto:function(){
        return this.nombre + " "+ this.apellido
    }
}

console.log(vendedor.vender())