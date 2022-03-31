function guardarVista(rutaUrl){

axios.post(rutaUrl,{
    inputs: document.getElementById('inputs').innerHTML,
    cabecera: document.getElementById('cabecera').innerHTML
})
.then((response)=>{
    respuesta= response.data;
    if(respuesta == 'Registro realizado con éxito'){
        window.alert(respuesta);
        window.location.href = 'index.php';
    }else{
        document.getElementById('erregister').innerHTML = respuesta;
    }
})
.catch((error)=>{
    console.log(error);
})
}
