function login(rutaUrl) {
    axios.post(rutaUrl,{
        usuario: document.getElementById('usuario').value,
        contraseña: document.getElementById('contraseña').value
    })
	.then((response)=>{
		const datos = response.data;

		if(datos.usuario == undefined || datos.iduser == undefined){
			document.getElementById('errlogin').innerHTML = "<p class='text-danger'>Usuario o contraseña incorrectos</p>";
		}else{
			document.cookie = "usuario="+datos.usuario;
			document.cookie = "iduser="+datos.iduser;
			window.location.href = 'index.php';
		}
	})
	.catch((error)=>{
		console.log(error);
	})
}