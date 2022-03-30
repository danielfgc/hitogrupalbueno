
var contadorh = 0;
var contadorp = 0;

function clicar(event){
          
        
            
    var n = event.currentTarget.id;
    sessionStorage.setItem("galleta",n);

    
}



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
         
        lista.innerHTML = '    <select name="hs" id="hs'+contadorh+'" onchange="pintarCabecera()">\
        <option value="h1">h1</option>\
        <option value="h2">h2</option>\
        <option value="h3">h3</option>\
        <option value="h4">h4</option>\
        <option value="h5">h5</option>\
        </select>\
        <input type="text" name="hcont" id="hcont'+contadorh+'" onkeyup="pintarCabecera()">\
        <button id="eh'+contadorh+'" onclick="eliminarElementoH()">Eliminar</button>';
        pintar.appendChild(lista);
        var div= document.createElement('div');
        div.setAttribute( 'id', "div"+contadorh);
        lista.setAttribute( 'id', ""+contadorh);
        document.getElementById('cabecera').appendChild(div);   
        lista.addEventListener("mouseover", function(event){clicar(event)});  
    
}

function pintarParrafo(){
    
    var ide =sessionStorage.getItem("galleta");
    var ps = document.getElementById('ps'+ide).value;
    var pcont = document.getElementById('pcont'+ide).value;
    document.getElementById('divp'+ide).innerHTML = "<"+ps+">"+pcont+"</"+ps+">";

}

function eliminarElementoP(){
    var ide =sessionStorage.getItem("galleta");
    var padre = document.getElementById('cabecera');
    var hijo = document.getElementById('divp'+ide);
    var padre2 = document.getElementById('parrafos');
    var hijo2 = document.getElementById(ide);
    padre2.removeChild(hijo2);
    padre.removeChild(hijo);
}
function agregarParrafo(){
    contadorp++;
         var parrafos = document.getElementById('parrafos');
         var list = document.createElement('li'); 
         
        list.innerHTML = '    <select name="hs" id="ps'+contadorp+'" onchange="pintarParrafo()">\
        <option value="p">p</option>\
        </select>\
        <input type="text" name="hcont" id="pcont'+contadorp+'" onkeyup="pintarParrafo()">\
        <button id="eh'+contadorp+'" onclick="eliminarElementoP()">Eliminar</button>';
        parrafos.appendChild(list);
        var div= document.createElement('div');
        div.setAttribute( 'id', "divp"+contadorp);
        list.setAttribute( 'id', contadorp);
        document.getElementById('cabecera').appendChild(div);   
        list.addEventListener("mouseover", function(event){clicar(event)}); 
          
}