//JSON=> JAVA SCRIPT OBJECT NOTATION es un formato de intercambio de datos
let url='https://jsonplaceholder.typicode.com'

//GET
/*fetch(`${url}/comments?postId=5`)
      .then(response => response.json())
      .then(json => console.log(json))*/

let requestBody={
    title:'Ricardo Diaz',
    body:'GRAND THEFT AUTO VICE CITY',
    userId:1,
}

//POST:enviar info
fetch(`${url}/posts`,{
    method:'POST',
    headers:{
        'Content-type':'Aplication Json;charset=UTF-8',
    },
    body:JSON.stringify(requestBody)
})
      .then(response => response.json())
      .then(json => console.log(json))

//Put:editar info
//PATCH:editar info(solo un atributo)      