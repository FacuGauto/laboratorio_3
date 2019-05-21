//Agregar el codigo necesario para cargar un array de objetos en una tabla html(se prohibe usar innerHTML)
//Agregar evento a todos los TD. conseguir los TD con una funcion recursiva que reciba como parametros, el body del HTML, y
//la funcion que asigna el manejador(la tabla ya debera ser parte del DOM).
//Agregar algun estilo por codigo JS
//Agregar algun estilo por hoja de estilo CSS

//Agregar el codigo necesario para realizar un ABM de personas(usando AJAX)
/*
traer:
HTTP:GET
URL:http://localhost:3000/traer
PARAMS: collection=personas
RTA: ARRAY DE PERSONAS

agregar:
HTTP:POST
URL:http://localhost:3000/agregar
PARAMS: {collection: 'personas',objeto:<persona>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:{message: "Alta exitosa"}

modificar:
HTTP:POST
URL:http://localhost:3000/modificar
PARAMS: {collection: 'personas',objeto:<persona>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:"Modificacion exitosa"

eliminar:
HTTP:POST
URL:http://localhost:3000/eliminar
PARAMS: {'collection':'personas','id' : <id>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:{"message":"Baja exitosa"}

*/

//NOTA: EL REQUEST HEADER SE AGREGA UNA VEZ ABIERTA LA CONEXION

window.onload = function(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET','http://localhost:3000/traer/?collection=personas',true);
        xhr.onreadystatechange = function(){
            //console.log(this.readyState);
            if(this.readyState === 4 && this.status === 200){
                console.log(JSON.parse(this.responseText));
                document.getElementById('spinner').style.display = "none";
                var personas = JSON.parse(this.responseText);
                var body = document.querySelector('body');
                var tabla = document.createElement("table");
                var thead = document.createElement("thead");
                var trhead = document.createElement("tr");

                for (var j = 0;j<Object.keys(personas[0]).length;j++) {
                    var td = document.createElement("td");
                    console.log(document.createTextNode(Object.keys(personas[0])[j]));
                    var text = document.createTextNode(Object.keys(personas[0])[j]);
                    td.appendChild(text);
                    trhead.appendChild(td);
                }
                thead.appendChild(trhead);
                tabla.appendChild(thead);

                for(var i=0;i<personas.length;i++){
                    var tr = document.createElement("tr");
                    for (var j = 0; j < Object.keys(personas[i]).length; j++) {
                        var td = document.createElement("td");
                        var text = document.createTextNode(Object.values(personas[i])[j]);
                        td.appendChild(text);
                        tr.appendChild(td);
                    }
                    tabla.appendChild(tr);
                }

                tabla.classList.add("borde");
                //console.log(tabla);
                body.appendChild(tabla);

                thhead = document.querySelector("table thead");
                for(var i=0;i<thead.querySelectorAll("td").length;i++){
                //recorro todos los "td" dentro del "thead" para poner en mayusculas el textContent
                    thead.querySelectorAll("td")[i].textContent = thead.querySelectorAll("td")[i].textContent.toUpperCase();
                }
                //agrego manejador de eventos a todos los td
                if(body.hasChildNodes){
                    recorrerDOM(body,function(node){
                        if(node.nodeName == "TD"){
                            node.addEventListener("click",function(e){
                                //recupero el ID(asumiendo ID siempre en la primera columna)
                                var id = console.log(e.target.parentNode.firstChild.textContent);
                            })
                        }
                    })
                }
            }
            else{
                document.getElementById('spinner').style.display = "block";
            }
        }
        xhr.send();
    }

    function recorrerDOM(node, func){
        func(node);
        node = node.firstChild;
        while (node) {
            recorrerDOM(node, func);
            node = node.nextSibling;
        }
    }