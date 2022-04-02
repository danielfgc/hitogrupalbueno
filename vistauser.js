var pintarId = document.getElementById('pintar');
if (pintarId.hasChildNodes()){
    pintarId= pintarId.lastChild.id;
}
var parrafosId = document.getElementById('parrafos');
if (parrafosId.hasChildNodes()){
    parrafosId= parrafosId.lastChild.id;
}
var fotosId = document.getElementById('fotos');
if (fotosId.hasChildNodes()){
    fotosId= fotosId.lastChild.id;
}

var enlacesId = document.getElementById('enlaces');
if (enlacesId.hasChildNodes()){
    enlacesId= enlacesId.lastChild.id;
}

if (pintarId != undefined){
    pintarId = pintarId.substr(1);
}
if (parrafosId != undefined){
    parrafosId = parrafosId.substr(1);
}
if (fotosId != undefined){
    fotosId = fotosId.substr(1);
}
if (enlacesId != undefined){
    enlacesId = enlacesId.substr(1);
}



 if(pintarId!=undefined){ 
    var contadorh=0+pintarId;
 }else{
    var contadorh=0; 
 }
 if(parrafosId!=undefined){ 
    var contadorp=0+parrafosId;
 }else{
    var contadorp=0; 
 }
 if(fotosId!=undefined){ 
    var contadori=0+fotosId;
 }else{
    var contadori=0; 
 }
 if(enlacesId!=undefined){ 
    var contadore=0+enlacesId;
 }else{
    var contadore=0; 
 }
 

function clicar(event){
          
        
            
    var n = event.currentTarget.id;
    sessionStorage.setItem("galleta",n);

    
}
document.querySelector('li').addEventListener("mouseover", function(event){clicar(event)});


function pintarCabecera(){
    
        var ide =sessionStorage.getItem("galleta");
        var hs = document.getElementById('hs'+ide).value;
        var hcont = document.getElementById('hcont'+ide).value;
        document.getElementById('div'+ide).innerHTML = "<"+hs+">"+hcont+"</"+hs+">";
    
}




function eliminarElementoH(){
    var ide =sessionStorage.getItem("galleta");
    
    var padre = document.getElementById('cabecera');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('pintar');
    var hijo2 = document.getElementById(ide);

    padre.removeChild(hijo);
    padre2.removeChild(hijo2);

}

function agregarTitulo(){
    contadorh++;
         var pintar = document.getElementById('pintar');
         var lista = document.createElement('li'); 
         
        lista.innerHTML = '    <select name="hs" id="hsh'+contadorh+'" onchange="pintarCabecera()">\
        <option value="h1">h1</option>\
        <option value="h2">h2</option>\
        <option value="h3">h3</option>\
        <option value="h4">h4</option>\
        <option value="h5">h5</option>\
        </select>\
        <input type="text" name="hcont" id="hconth'+contadorh+'" onkeyup="pintarCabecera()">\
        <button id="eh'+contadorh+'" onclick="eliminarElementoH()" class="btn btn-danger">Eliminar</button>';
        pintar.appendChild(lista);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divh"+contadorh);
        lista.setAttribute( 'id', "h"+contadorh);
        lista.setAttribute('class', 'd-flex flex-nowrap');
        document.getElementById('cabecera').appendChild(div);   
        lista.addEventListener("mouseover", function(event){clicar(event)});  
    
}

function pintarParrafo(){
    
    var ide =sessionStorage.getItem("galleta");
    var ps = document.getElementById('ps'+ide).value;
    var pcont = document.getElementById('pcont'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<p style='font-size:"+ps+"px'>"+pcont+"</p>";

}

function eliminarElementoP(){
    var ide =sessionStorage.getItem("galleta");
    var padre = document.getElementById('cabecera');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('parrafos');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
}
function agregarParrafo(){
    contadorp++;
         var parrafos = document.getElementById('parrafos');
         var list = document.createElement('li'); 
         
        list.innerHTML = '    <input type="number" name="hs" id="psp'+contadorp+'" placeholder="Tamaño de letra"  onchange="pintarParrafo()">\
        <input type="text" name="hcont" id="pcontp'+contadorp+'" onkeyup="pintarParrafo()">\
        <button id="eh'+contadorp+'" onclick="eliminarElementoP()">Eliminar</button>';
        parrafos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divp"+contadorp);
        list.setAttribute( 'id','p'+ contadorp);
        list.setAttribute('class', 'd-flex flex-nowrap');
        document.getElementById('cabecera').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar(event)}); 
          
}

function pintarFoto(){
    
    var ide =sessionStorage.getItem("galleta");
    var icont = document.getElementById('icont'+ide).value;
    var wcont = document.getElementById('wcont'+ide).value;
    var rcont = document.getElementById('rcont'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<img src='"+icont+"' class='img-fluid' width='"+wcont+"px' alt='' style='border-radius:"+rcont+"px'>";

}

function eliminarElementoI(){
    var ide =sessionStorage.getItem("galleta");
    var padre = document.getElementById('cabecera');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('fotos');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
    
}
function agregarImagen(){
    contadori++;
         var fotos = document.getElementById('fotos');
         var list = document.createElement('li'); 
         
        list.innerHTML = '<input type="text" name="hcont" id="iconti'+contadori+'" placeholder="URL de imagen" onkeyup="pintarFoto()">\
        <input type="text" name="hcont" id="wconti'+contadori+'" placeholder="Ancho de imagen" onkeyup="pintarFoto()">\
        <input type="text" name="hcont" id="rconti'+contadori+'" placeholder="Redondear imagen" onkeyup="pintarFoto()">\
        <button id="eh'+contadori+'" onclick="eliminarElementoI()">Eliminar</button>';
        fotos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divi"+contadori);
        list.setAttribute( 'id','i'+ contadori);
        document.getElementById('cabecera').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar(event)}); 
          
}

function pintarEnlace(){
    
    var ide =sessionStorage.getItem("galleta");
    var hcont = document.getElementById('hcont'+ide).value;
    var econt = document.getElementById('econt'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<a href="+hcont+">"+econt+"</a>";

}

function eliminarElementoE(){
    var ide =sessionStorage.getItem("galleta");
    var padre = document.getElementById('cabecera');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('enlaces');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
   
    
    
}
function agregarEnlace(){
    contadore++;
         var enlaces = document.getElementById('enlaces');
         var list = document.createElement('li'); 
         
        list.innerHTML = '<input type="text" name="hcont" id="hconte'+contadore+'" placeholder="URL del enlace" onkeyup="pintarEnlace()">\
        <input type="text" name="hcont" id="econte'+contadore+'" placeholder="Nombre del enlace" onkeyup="pintarEnlace()">\
        <button id="eh'+contadore+'" onclick="eliminarElementoE()">Eliminar</button>';
        enlaces.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "dive"+contadore);
        list.setAttribute( 'id','e'+ contadore);
        document.getElementById('cabecera').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar(event)}); 
          
}

