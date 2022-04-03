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
// document.querySelector('li').addEventListener("mouseover", function(event){clicar(event)});


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
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
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
        lista.setAttribute('class', 'd-flex flex-nowrap mt-md-3');
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
         
        list.innerHTML = '    <input type="number" name="hs" id="psp'+contadorp+'" placeholder="Tamaño de letra" onkeyup="pintarParrafo()" onchange="pintarParrafo()">\
        <input type="text" name="hcont" id="pcontp'+contadorp+'" onkeyup="pintarParrafo()">\
        <button id="eh'+contadorp+'" onclick="eliminarElementoP()" class="btn btn-danger">Eliminar</button>';
        parrafos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divp"+contadorp);
        list.setAttribute( 'id','p'+ contadorp);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3');
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
        <button id="eh'+contadori+'" onclick="eliminarElementoI()"class="btn btn-danger">Eliminar</button>';
        fotos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divi"+contadori);
        list.setAttribute( 'id','i'+ contadori);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3');
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
        <button id="eh'+contadore+'" onclick="eliminarElementoE()"class="btn btn-danger">Eliminar</button>';
        enlaces.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "dive"+contadore);
        list.setAttribute( 'id','e'+ contadore);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3 mb-md-3');
        document.getElementById('cabecera').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar(event)}); 
          
}

// Hasta aqui los elementos de la cabecera
var pintarIdCuerpo = document.getElementById('pintarcuerpo');
if (pintarIdCuerpo.hasChildNodes()){
    pintarIdCuerpo= pintarIdCuerpo.lastChild.id;
}
var parrafosIdCuerpo = document.getElementById('parrafoscuerpo');
if (parrafosIdCuerpo.hasChildNodes()){
    parrafosIdCuerpo= parrafosIdCuerpo.lastChild.id;
}
var fotosIdCuerpo = document.getElementById('fotoscuerpo');
if (fotosIdCuerpo.hasChildNodes()){
    fotosIdCuerpo= fotosIdCuerpo.lastChild.id;
}

var enlacesIdCuerpo = document.getElementById('enlacescuerpo');
if (enlacesIdCuerpo.hasChildNodes()){
    enlacesIdCuerpo= enlacesIdCuerpo.lastChild.id;
}

if (pintarIdCuerpo != undefined){
    pintarIdCuerpo = pintarIdCuerpo.substr(2);
}
if (parrafosIdCuerpo != undefined){
    parrafosIdCuerpo = parrafosIdCuerpo.substr(2);
}
if (fotosIdCuerpo != undefined){
    fotosIdCuerpo = fotosIdCuerpo.substr(2);
}
if (enlacesIdCuerpo != undefined){
    enlacesIdCuerpo = enlacesIdCuerpo.substr(2);
}



 if(pintarIdCuerpo!=undefined){ 
    var contadorhc=0+pintarIdCuerpo;
 }else{
    var contadorhc=0; 
 }
 if(parrafosIdCuerpo!=undefined){ 
    var contadorpc=0+parrafosIdCuerpo;
 }else{
    var contadorpc=0; 
 }
 if(fotosIdCuerpo!=undefined){ 
    var contadoric=0+fotosIdCuerpo;
 }else{
    var contadoric=0; 
 }
 if(enlacesIdCuerpo!=undefined){ 
    var contadorec=0+enlacesIdCuerpo;
 }else{
    var contadorec=0; 
 }
 

function clicar2(event){
          
        
            
    var n = event.currentTarget.id;
    sessionStorage.setItem("galleta2",n);

    
}

// document.querySelector('li').addEventListener("mouseover", function(event){clicar2(event)});


function pintarCuerpo(){
    
        var ide =sessionStorage.getItem("galleta2");
        var hs = document.getElementById('hs'+ide).value;
        var hcont = document.getElementById('hcont'+ide).value;
        document.getElementById('div'+ide).innerHTML = "<"+hs+">"+hcont+"</"+hs+">";
    
}




function eliminarElementoHCuerpo(){
    var ide =sessionStorage.getItem("galleta2");
    
    var padre = document.getElementById('cuerpo');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('pintarcuerpo');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
}

function agregarTituloCuerpo(){
    contadorhc++;
         var pintar = document.getElementById('pintarcuerpo');
         var lista = document.createElement('li'); 
         
        lista.innerHTML = '    <select name="hs" id="hshc'+contadorhc+'" onchange="pintarCuerpo()">\
        <option value="h1">h1</option>\
        <option value="h2">h2</option>\
        <option value="h3">h3</option>\
        <option value="h4">h4</option>\
        <option value="h5">h5</option>\
        </select>\
        <input type="text" name="hcont" id="hconthc'+contadorhc+'" onkeyup="pintarCuerpo()">\
        <button id="ehc'+contadorhc+'" onclick="eliminarElementoHCuerpo()" class="btn btn-danger">Eliminar</button>';
        pintar.appendChild(lista);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divhc"+contadorhc);
        lista.setAttribute( 'id', "hc"+contadorhc);
        lista.setAttribute('class', 'd-flex flex-wrap mt-md-3');
        document.getElementById('cuerpo').appendChild(div);   
        lista.addEventListener("mouseover", function(event){clicar2(event)});  
    
}

function pintarParrafoCuerpo(){
    
    var ide =sessionStorage.getItem("galleta2");
    var ps = document.getElementById('ps'+ide).value;
    var pcont = document.getElementById('pcont'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<p style='font-size:"+ps+"px'>"+pcont+"</p>";

}

function eliminarElementoPCuerpo(){
    var ide =sessionStorage.getItem("galleta2");
    var padre = document.getElementById('cuerpo');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('parrafoscuerpo');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
}
function agregarParrafoCuerpo(){
    contadorpc++;
         var parrafos = document.getElementById('parrafoscuerpo');
         var list = document.createElement('li'); 
         
        list.innerHTML = '    <input type="number" name="hs" id="pspc'+contadorpc+'" placeholder="Tamaño de letra" onkeyup="pintarParrafoCuerpo()" onchange="pintarParrafoCuerpo()">\
        <input type="text" name="hcont" id="pcontpc'+contadorpc+'" onkeyup="pintarParrafoCuerpo()">\
        <button id="ehc'+contadorpc+'" onclick="eliminarElementoPCuerpo()"class="btn btn-danger">Eliminar</button>';
        parrafos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divpc"+contadorpc);
        list.setAttribute( 'id','pc'+ contadorpc);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3');
        document.getElementById('cuerpo').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar2(event)}); 
          
}


function pintarFotoCuerpo(){
    
    var ide =sessionStorage.getItem("galleta2");
    var icont = document.getElementById('icont'+ide).value;
    var wcont = document.getElementById('wcont'+ide).value;
    var rcont = document.getElementById('rcont'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<img src='"+icont+"' class='img-fluid' width='"+wcont+"px' alt='' style='border-radius:"+rcont+"px'>";

}

function eliminarElementoICuerpo(){
    var ide =sessionStorage.getItem("galleta2");
    var padre = document.getElementById('cuerpo');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('fotoscuerpo');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
    
}
function agregarImagenCuerpo(){
    contadoric++;
         var fotos = document.getElementById('fotoscuerpo');
         var list = document.createElement('li'); 
         
        list.innerHTML = '<input type="text" name="hcont" id="icontic'+contadoric+'" placeholder="URL de imagen" onkeyup="pintarFotoCuerpo()">\
        <input type="text" name="hcont" id="wcontic'+contadoric+'" placeholder="Ancho de imagen" onkeyup="pintarFotoCuerpo()">\
        <input type="text" name="hcont" id="rcontic'+contadoric+'" placeholder="Redondear imagen" onkeyup="pintarFotoCuerpo()">\
        <button id="ehc'+contadoric+'" onclick="eliminarElementoICuerpo()"class="btn btn-danger">Eliminar</button>';
        fotos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divic"+contadoric);
        list.setAttribute( 'id','ic'+ contadoric);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3');
        document.getElementById('cuerpo').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar2(event)}); 
          
}

function pintarEnlaceCuerpo(){
    
    var ide =sessionStorage.getItem("galleta2");
    var hcont = document.getElementById('hcont'+ide).value;
    var econt = document.getElementById('econt'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<a href="+hcont+">"+econt+"</a>";

}

function eliminarElementoECuerpo(){
    var ide =sessionStorage.getItem("galleta2");
    var padre = document.getElementById('cuerpo');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('enlacescuerpo');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
   
    
    
}
function agregarEnlaceCuerpo(){
    contadorec++;
         var enlaces = document.getElementById('enlacescuerpo');
         var list = document.createElement('li'); 
         
        list.innerHTML = '<input type="text" name="hcont" id="hcontec'+contadorec+'" placeholder="URL del enlace" onkeyup="pintarEnlaceCuerpo()">\
        <input type="text" name="hcont" id="econtec'+contadorec+'" placeholder="Nombre del enlace" onkeyup="pintarEnlaceCuerpo()">\
        <button id="ehc'+contadorec+'" onclick="eliminarElementoECuerpo()"class="btn btn-danger">Eliminar</button>';
        enlaces.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divec"+contadorec);
        list.setAttribute( 'id','ec'+ contadorec);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3 mb-md-3');
        document.getElementById('cuerpo').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar2(event)}); 
          
}

// Hasta aqui los elementos del cuerpo
var pintarIdfooter = document.getElementById('pintarfooter');
if (pintarIdfooter.hasChildNodes()){
    pintarIdfooter= pintarIdfooter.lastChild.id;
}
var parrafosIdfooter = document.getElementById('parrafosfooter');
if (parrafosIdfooter.hasChildNodes()){
    parrafosIdfooter= parrafosIdfooter.lastChild.id;
}
var fotosIdfooter = document.getElementById('fotosfooter');
if (fotosIdfooter.hasChildNodes()){
    fotosIdfooter= fotosIdfooter.lastChild.id;
}

var enlacesIdfooter = document.getElementById('enlacesfooter');
if (enlacesIdfooter.hasChildNodes()){
    enlacesIdfooter= enlacesIdfooter.lastChild.id;
}

if (pintarIdfooter != undefined){
    pintarIdfooter = pintarIdfooter.substr(2);
}
if (parrafosIdfooter != undefined){
    parrafosIdfooter = parrafosIdfooter.substr(2);
}
if (fotosIdfooter != undefined){
    fotosIdfooter = fotosIdfooter.substr(2);
}
if (enlacesIdfooter != undefined){
    enlacesIdfooter = enlacesIdfooter.substr(2);
}



 if(pintarIdfooter!=undefined){ 
    var contadorhf=0+pintarIdfooter;
 }else{
    var contadorhf=0; 
 }
 if(parrafosIdfooter!=undefined){ 
    var contadorpf=0+parrafosIdfooter;
 }else{
    var contadorpf=0; 
 }
 if(fotosIdfooter!=undefined){ 
    var contadorif=0+fotosIdfooter;
 }else{
    var contadorif=0; 
 }
 if(enlacesIdfooter!=undefined){ 
    var contadoref=0+enlacesIdfooter;
 }else{
    var contadoref=0; 
 }
 

function clicar3(event){
          
        
            
    var n = event.currentTarget.id;
    sessionStorage.setItem("galleta3",n);

    
}

//document.querySelector('li').addEventListener("mouseover", function(event){clicar3(event)});


function pintarfooter(){
    
        var ide =sessionStorage.getItem("galleta3");
        var hs = document.getElementById('hs'+ide).value;
        var hcont = document.getElementById('hcont'+ide).value;
        document.getElementById('div'+ide).innerHTML = "<"+hs+">"+hcont+"</"+hs+">";
    
}




function eliminarElementoHfooter(){
    var ide =sessionStorage.getItem("galleta3");
    
    var padre = document.getElementById('footer');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('pintarfooter');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
}

function agregarTitulofooter(){
    contadorhf++;
         var pintar = document.getElementById('pintarfooter');
         var lista = document.createElement('li'); 
         
        lista.innerHTML = '    <select name="hs" id="hshf'+contadorhf+'" onchange="pintarfooter()">\
        <option value="h1">h1</option>\
        <option value="h2">h2</option>\
        <option value="h3">h3</option>\
        <option value="h4">h4</option>\
        <option value="h5">h5</option>\
        </select>\
        <input type="text" name="hcont" id="hconthf'+contadorhf+'" onkeyup="pintarfooter()">\
        <button id="ehf'+contadorhf+'" onclick="eliminarElementoHfooter()" class="btn btn-danger">Eliminar</button>';
        pintar.appendChild(lista);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divhf"+contadorhf);
        lista.setAttribute( 'id', "hf"+contadorhf);
        lista.setAttribute('class', 'd-flex flex-wrap mt-md-3');
        document.getElementById('footer').appendChild(div);   
        lista.addEventListener("mouseover", function(event){clicar3(event)});  
    
}

function pintarParrafofooter(){
    
    var ide =sessionStorage.getItem("galleta3");
    var ps = document.getElementById('ps'+ide).value;
    var pcont = document.getElementById('pcont'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<p style='font-size:"+ps+"px'>"+pcont+"</p>";

}

function eliminarElementoPfooter(){
    var ide =sessionStorage.getItem("galleta3");
    var padre = document.getElementById('footer');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('parrafosfooter');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
}
function agregarParrafofooter(){
    contadorpf++;
         var parrafos = document.getElementById('parrafosfooter');
         var list = document.createElement('li'); 
         
        list.innerHTML = '    <input type="number" name="hs" id="pspf'+contadorpf+'" placeholder="Tamaño de letra" onkeyup="pintarParrafofooter()" onchange="pintarParrafofooter()">\
        <input type="text" name="hcont" id="pcontpf'+contadorpf+'" onkeyup="pintarParrafofooter()">\
        <button id="ehf'+contadorpf+'" onclick="eliminarElementoPfooter()"class="btn btn-danger">Eliminar</button>';
        parrafos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divpf"+contadorpf);
        list.setAttribute( 'id','pf'+ contadorpf);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3');
        document.getElementById('footer').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar3(event)}); 
          
}


function pintarFotofooter(){
    
    var ide =sessionStorage.getItem("galleta3");
    var icont = document.getElementById('icont'+ide).value;
    var wcont = document.getElementById('wcont'+ide).value;
    var rcont = document.getElementById('rcont'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<img src='"+icont+"' class='img-fluid' width='"+wcont+"px' alt='' style='border-radius:"+rcont+"px'>";

}

function eliminarElementoIfooter(){
    var ide =sessionStorage.getItem("galleta3");
    var padre = document.getElementById('footer');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('fotosfooter');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
    
    
}
function agregarImagenfooter(){
    contadorif++;
         var fotos = document.getElementById('fotosfooter');
         var list = document.createElement('li'); 
         
        list.innerHTML = '<input type="text" name="hcont" id="icontif'+contadorif+'" placeholder="URL de imagen" onkeyup="pintarFotofooter()">\
        <input type="text" name="hcont" id="wcontif'+contadorif+'" placeholder="Ancho de imagen" onkeyup="pintarFotofooter()">\
        <input type="text" name="hcont" id="rcontif'+contadorif+'" placeholder="Redondear imagen" onkeyup="pintarFotofooter()">\
        <button id="ehf'+contadorif+'" onclick="eliminarElementoIfooter()"class="btn btn-danger">Eliminar</button>';
        fotos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divif"+contadorif);
        list.setAttribute( 'id','if'+ contadorif);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3');
        document.getElementById('footer').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar3(event)}); 
          
}

function pintarEnlacefooter(){
    
    var ide =sessionStorage.getItem("galleta3");
    var hcont = document.getElementById('hcont'+ide).value;
    var econt = document.getElementById('econt'+ide).value;
    document.getElementById('div'+ide).innerHTML = "<a href="+hcont+">"+econt+"</a>";

}

function eliminarElementoEfooter(){
    var ide =sessionStorage.getItem("galleta3");
    var padre = document.getElementById('footer');
    var hijo = document.getElementById('div'+ide);
    var padre2 = document.getElementById('enlacesfooter');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
   
    
    
}
function agregarEnlacefooter(){
    contadoref++;
         var enlaces = document.getElementById('enlacesfooter');
         var list = document.createElement('li'); 
         
        list.innerHTML = '<input type="text" name="hcont" id="hcontef'+contadoref+'" placeholder="URL del enlace" onkeyup="pintarEnlacefooter()">\
        <input type="text" name="hcont" id="econtef'+contadoref+'" placeholder="Nombre del enlace" onkeyup="pintarEnlacefooter()">\
        <button id="ehf'+contadoref+'" onclick="eliminarElementoEfooter()"class="btn btn-danger">Eliminar</button>';
        enlaces.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divef"+contadoref);
        list.setAttribute( 'id','ef'+ contadoref);
        list.setAttribute('class', 'd-flex flex-wrap mt-md-3 mb-md-3');
        document.getElementById('footer').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar3(event)}); 
          
}
//Hasta aqui los elementos del footer

function colorBody(){
    var colorbody=document.getElementById('colorbody').value;
    var colortextobody=document.getElementById('colortextobody').value;
    document.getElementById('main').setAttribute('style', 'background-color:'+colorbody+'; color:'+colortextobody+';');
    

}
function colorCabecera(){
    var colorcabecera=document.getElementById('colorcabecera').value;
    var colortextocabecera=document.getElementById('colortextocabecera').value;
    document.getElementById('cabecera').setAttribute('style', 'background-color:'+colorcabecera+';color:'+colortextocabecera+';');
}
function colorCuerpo(){
    var colorcuerpo=document.getElementById('colorcuerpo').value;
    var colortextocuerpo=document.getElementById('colortextocuerpo').value;
    document.getElementById('cuerpo').setAttribute('style', 'background-color:'+colorcuerpo+';color:'+colortextocuerpo+';');
}
function colorFooter(){
    var colorfooter=document.getElementById('colorfooter').value;
    var colortextofooter=document.getElementById('colortextofooter').value;
    document.getElementById('footer').setAttribute('style', 'background-color:'+colorfooter+';color:'+colortextofooter+';');
}
