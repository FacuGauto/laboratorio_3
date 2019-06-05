var vec = [3,4,2,6,7,5];

//var dobles = [];

/*for (var index = 0; index < vec.length; index++) {
    dobles.push(vec[index] * 2);
}*/
/*
vec.forEach(function(elemento){
    dobles.push(elemento*2);
});

*/
/*var dobles = vec.map((valor,indice,array)=>{
    return valor*2;
})
console.log(vec);
console.log(dobles);*/



//console.log(nombres);

/*function cargarSelect(){
    var select = document.getElementsByTagName('select')[0];

    if()



    var nombres = empleados.map(function(empleado){
        return empleado.nombre;
    });
    nombres.forEach(function(nombre){
        var option = document.createElement('option');
        option.textContent = nombre;
        select.appendChild(option);
        
    });
}*/


var x = empleados.map(function(e){
    return {"id":e.id,"email":e.email};
});

console.log(x);