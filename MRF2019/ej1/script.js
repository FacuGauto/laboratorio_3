var vec = [3,4,2,6,7,5];
/*
for(var i = 0; i<vec.length;i++)
{
    if(vec[i]%2 == 0){
        console.log(vec[i]);
    }
}

vec.forEach(function(numero){
    if(numero%2==0){
        console.log(numero);
    }
});
*/
var pares = vec.filter(function(numero){
    return !(numero % 2);
});

console.log(pares);


var hombres = empleados.filter(function(empleado){
    return empleado.genero === "Male";
});

console.log(hombres);