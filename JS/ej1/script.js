//function Saludar(){
    //alert("Hola Mundo");
  //  document.getElementById("p1").innerHTML = "Esto es un parrafo";
//}
//document.getElementById('p1').onclick =function(){
//    this.innerHTML = "AHORA";
//}

var miParrafo;
window.addEventListener('load', inicializarEventos);

function inicializarEventos(){
    miParrafo = document.getElementById('p1');
    miParrafo.addEventListener('click',function(){
        this.innerHTML = "Hola";
    })
}
//document.getElementById('p1').addEventListener('click', function(){
//    this.innerHTML = "dsdsdsdsd";
//});