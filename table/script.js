window.addEventListener('load',inicializarEventos);
function inicializarEventos()
{
    let btn = document.getElementById('btnTabla');
    btn.addEventListener('click',cargarTabla);    
}



function cargarTabla(){
    var personas = data;
    var tabla = document.createElement('table');
    tabla.setAttribute('border','1px solid black');
    var cabecera = document.createElement('tr');

    for (var atributo in personas[0]) {
        var th = document.createElement('th');
        var texto = document.createTextNode(atributo);
        th.appendChild(texto);
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    for(var i in personas){
        var fila = document.createElement('tr');
        var unaPersona = personas[i];

        for (var j in unaPersona) {
            var celda = document.createElement('td');
            var dato = document.createTextNode(unaPersona[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.getElementById('info').appendChild(tabla);
}