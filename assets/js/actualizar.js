function actualizarVista(rutaUrl){

    axios.post(rutaUrl,{
        inputs: document.getElementById('accordion').innerHTML,
        cabecera: document.getElementById('cabeceras').innerHTML,
        cuerpo: document.getElementById('cuerpos').innerHTML,
        footer: document.getElementById('footers').innerHTML,
        nombrevista:document.getElementById('nombrevista').value,
        idvista:document.getElementById('idvista').value

    })
    .then((response)=>{
        respuesta= response.data;
        if(respuesta){
            window.alert("Actualizado con éxito");
            window.location.href = 'index.php';
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    }
    