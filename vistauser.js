function pintarCabecera(){
    var hs = document.getElementById('hs').value;
    var hcont = document.getElementById('hcont').value;

    document.getElementById('cabecera').innerHTML = "<"+hs+">"+hcont+"</"+hs+">";
}