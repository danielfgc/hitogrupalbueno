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
        lista.setAttribute('class', 'd-flex flex-nowrap');
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
         
        list.innerHTML = '    <input type="number" name="hs" id="pspf'+contadorpf+'" placeholder="Tamaño de letra"  onchange="pintarParrafofooter()">\
        <input type="text" name="hcont" id="pcontf'+contadorpf+'" onkeyup="pintarParrafofooter()">\
        <button id="ehf'+contadorpf+'" onclick="eliminarElementoPfooter()">Eliminar</button>';
        parrafos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divpf"+contadorpf);
        list.setAttribute( 'id','pf'+ contadorpf);
        list.setAttribute('class', 'd-flex flex-nowrap');
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
        <button id="ehf'+contadorif+'" onclick="eliminarElementoIfooter()">Eliminar</button>';
        fotos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divif"+contadorif);
        list.setAttribute( 'id','if'+ contadorif);
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
        <button id="ehf'+contadoref+'" onclick="eliminarElementoEfooter()">Eliminar</button>';
        enlaces.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divef"+contadoref);
        list.setAttribute( 'id','ef'+ contadoref);
        document.getElementById('footer').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar3(event)}); 
          
}