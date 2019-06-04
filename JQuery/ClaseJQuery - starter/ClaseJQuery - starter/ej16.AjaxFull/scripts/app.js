$(function(){
    inicializarEventos();
})


function inicializarEventos(){
    $("#btnEnviarAjax").click(enviarAjax);
    $("#btnEnviarGet").click(enviarGet);
    $("#btnEnviarGetMensajes").click(enviarGetMensajes);
    $("#btnEnviarPost").click(enviarPost);
    $("#btnLoad").click(usarLoad);
}


function enviarAjax(e){
    e.preventDefault();
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    }
console.log(legajo);
console.log(nombre);
    $.ajax({
        url: "http://localhost:3000/concatenar",
        data: parametros,
        //type: post,
        //dataType: 'json'.
        beforeSend: function(){
            $("#info").html('<img src="./images/sping.gif" alt="preloader">',)
        },
        success: function(respuesta){
            $("#info").html(respuesta);
        },
        error: function(xhr,status){
            alert("Error " + xhr.status + "-" + xhr.statusText);
        },
        complete: function(xhr,status){
            alert("Peticion completa");
        }

    });
}

    function enviarGet(e){
        e.preventDefault();
        var legajo = $("#txtLegajo").val();
        var nombre = $("#txtNombre").val();
    
        var parametros = {
            "legajo": legajo,
            "nombre": nombre
        }
        $.get("http://localhost:3000/concatenar",parametros,function(respuesta){
            $("#info").text(respuesta);
        })
    }


    function enviarGetMensajes(e){
        e.preventDefault();
        var legajo = $("#txtLegajo").val();
        var nombre = $("#txtNombre").val();
    
        var parametros = {
            "legajo": legajo,
            "nombre": nombre
        }
        $.get("http://localhost:3000/concatenar",parametros,function(respuesta){
            $("#info").text(respuesta);
        })
        .done(function(){
            alert("done");
        })
        .fail(function(){
            alert("fail");
        })
        .always(function(){
            alert("always");
        })
    }

    function enviarPost(e){
        e.preventDefault();
        var legajo = $("#txtLegajo").val();
        var nombre = $("#txtNombre").val();
    
        var parametros = {
            "legajo": legajo,
            "nombre": nombre
        }
        $.post("http://localhost:3000/loadhtml",parametros,function(respuesta){
            console.log(respuesta);            
        //$("#info").text(respuesta);
        })
        $.post("http://localhost:3000/saludo",parametros,function(respuesta){
            console.log(respuesta);            
        //$("#info").text(respuesta);
        })
    }
    
    function usarLoad(e){
        e.preventDefault();
        $("#info").load("http://localhost:3000/loadhtml");
    }

