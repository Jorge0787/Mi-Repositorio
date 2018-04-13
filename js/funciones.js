function mensaje(){
    document.querySelector("p:first-child").onclick=saludar;
}
function saludar(){ /* Esta función es la que su utiliza para el mensaje*/
    alert("Hola");
}
window.onload=mensaje;

function muestratexto(){
    var elem=document.getElementById("#parrafo1");
    elem.innerHTML = "Texto cambiado <strong>con negrita</strong>";
}

function concatenaNombre(){
    var nombre=document.getElementById("nombre").innerHTML;
    var apellidos=document.getElementById("apellidos").innerHTML;
    
    document.getElementById("nombrecompleto").innerHTML=nombre + apellidos;
}

function suma(){
    var primernumero=document.getElementById("numero1").value;
    var segundonumero=document.getElementById("numero2").value;
    var resultadosuma = parseFloat(primernumero) + parseFloat(segundonumero);
    document.getElementById("suma").innerHTML= resultadosuma;
}

function resta(){
    var primernumero=document.getElementById("numero1").value;
    var segundonumero=document.getElementById("numero2").value;
    var resultadoresta = parseFloat(primernumero) - parseFloat(segundonumero);
    document.getElementById("resta").innerHTML= resultadoresta;
}

function multiplicar(){
    var primernumero=document.getElementById("numero1").value;
    var segundonumero=document.getElementById("numero2").value;
    var resultadomult = parseFloat(primernumero) * parseFloat(segundonumero);
    document.getElementById("multiplicar").innerHTML= resultadomult;
}

function dividir(){
    var primernumero=document.getElementById("numero1").value; /*SE USA VALUE PORQUE SON NUMEROS*/
    var segundonumero=document.getElementById("numero2").value;
    var resultadodiv = parseFloat(primernumero) / parseFloat(segundonumero);
    document.getElementById("dividir").innerHTML= resultadodiv;
}

/*Math.pow(n1,n2) para elevar el primero con el segundo*/
function exponente(){
    var primernumero=document.getElementById("numero1").value;
    var segundonumero=document.getElementById("numero2").value;
    var resultadoexp = parseFloat(primernumero)**parseFloat(segundonumero);
    document.getElementById("exponente").innerHTML= resultadoexp;
}

function parimpar1(){
    var primernumero=document.getElementById("numero1").value;
    if (parseFloat(primernumero)%2==0){
        document.getElementById("parimpar1").innerHTML="EL PRIMER NÚMERO ES PAR";
    }
    else{
        document.getElementById("parimpar1").innerHTML="EL PRIMER NÚMERO ES IMPAR";
    }
}

function parimpar2(){
    var segundonumero=document.getElementById("numero2").value;
    if (parseFloat(segundonumero)%2==0){
        document.getElementById("parimpar2").innerHTML="EL SEGUNDO NÚMERO ES PAR";
    }
    else{
        document.getElementById("parimpar2").innerHTML="EL SEGUNDO NÚMERO ES IMPAR";
    }
}

function muestraCoches(){
    var coches=["renault", "peugeot", "citroen", "ford"];
    var texto="<ul>";
    for(i=0;i<coches.length;i++){
        texto+="<li>"+coches[i]+"</li>";
    }
/*text+= es lo mismo que text=text+*/
texto+="</ul>";
document.getElementById("listadocoches").innerHTML= texto;/*listado directo entre comas seria con esto: coches.join(",");*/
}

function peso(){
    var kilos=[80,100,73,67,93,89,81];
    var mas80=0;
    for (i=0;i<kilos.length;i++){
        if(kilos[i]>80){
            mas80++;
        }
    }
    document.getElementById("listadomas80").innerHTML=mas80;
}

function notas(){
    var calificaciones=[3, 8, 7, 5, 4.5, 9, 8, 7, 3.5, 6, 10, 7, 7.5];
    var susp=0;
    var aptos=0;
    var bien=0;
    var nt=0;
    var sb=0;
    var mh=0;
    for (i=0;i<calificaciones.length;i++){
        if(calificaciones[i]<5){
            susp++;
            }
    }
    for (i=0;i<calificaciones.length;i++){
        if(calificaciones[i]>=5 && calificaciones[i]<6){
            aptos++;
            }
    }
    for (i=0;i<calificaciones.length;i++){
        if(calificaciones[i]>6 && calificaciones[i]<=7){
            bien++;
            }
    }
}

/*para añadir al final a un array ELEMENTO.push para añadir al principio .unshif
el .splice coloca el nuevo elemento donde nosotros deseemos jljij.splice(pos que tocamos, posicion desde lo anterior)
lisdo1.concat(listado2) para concatenar listados de arrays
quitar un elemento es .slice(posición del elemento a eliminar)
.reverse() invierte el orden
para colocar el mayor delante:
var mayor=peso[0]*/

/* var alumnos=[{nombre:4, peso:50},{nombre:5, peso:92}]
posicion.peso*/

function trabajadormenoscobra (){
    var empleados=[{nombre:"Marta",sueldo:1000,horas:50},{nombre:"Javier",sueldo:3500,horas:100},{nombre:"Pepe",sueldo:800,horas:100},{nombre:"Sandra",sueldo:950,horas:95},{nombre:"Teresa",sueldo:2700,horas:90}];
    empleados.sort(function(a, b){return a.sueldo - b.sueldo});
    document.getElementById("listadopersonamenoscobra").innerHTML=empleados[0].nombre;
}
function mastrabajador (){
    var empleados=[{nombre:"Marta",sueldo:1000,horas:50},{nombre:"Javier",sueldo:3500,horas:100},{nombre:"Pepe",sueldo:800,horas:100},{nombre:"Sandra",sueldo:950,horas:95},{nombre:"Teresa",sueldo:2700,horas:90}];
    empleados.sort(function(a, b){return a.horas - b.horas});
    document.getElementById("listadomastrabajador").innerHTML=empleados[4].nombre;
}
/*function sueldomedio (){
    var empleados=[{nombre:"Marta",sueldo:1000,horas:50},{nombre:"Javier",sueldo:3500,horas:100},{nombre:"Pepe",sueldo:800,horas:100},{nombre:"Sandra",sueldo:950,horas:95},{nombre:"Teresa",sueldo:2700,horas:90}];

}*/

var dataSet=[
    ["Javier","3500","100"],
    ["Fran","2000","200"],
    ["Ana","2750","100"]
];