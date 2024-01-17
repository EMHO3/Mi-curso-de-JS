//estructura de un TRY CATCH
try {
    //LLAMADO AL BACKEND (a travez de un API)
    console.log("llamando al backend")
    throw("Este cliente no esta apto para la compra")
} catch (error) {
    //tomamos el error y hacemos algo algo al respecto
    console.log("algo fallo",error)
}finally {
    //se jecuta siempre
    console.log("XD")
}
 