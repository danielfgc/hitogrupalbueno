function actualizarVista(rutaUrl){

    axios.post(rutaUrl,{
        inputs: document.getElementById('accordion').innerHTML,
        cabecera: document.getElementById('cabeceras').innerHTML,
        cuerpo: document.getElementById('cuerpos').innerHTML,
        footer: document.getElementById('footers').innerHTML
    })
    .then((response)=>{
        respuesta= response.data;
        if(respuesta){
            window.alert("Actualizado con éxito");
            window.location.href = 'pruebacanvas.php';
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    }
    