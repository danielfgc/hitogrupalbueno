function guardarVista(rutaUrl){

axios.post(rutaUrl,{
    inputs: document.getElementById('inputs').innerHTML,
    cabecera: document.getElementById('cabecera').innerHTML
})
.then((response)=>{
    respuesta= response.data;
    if(respuesta){
        window.alert("Insertado con éxito");
        window.location.href = 'pruebacanvas.php';
    }
})
.catch((error)=>{
    console.log(error);
})
}
