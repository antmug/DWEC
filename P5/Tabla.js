function actualizar(){
    element = document.getElementById("tabla");
    element.innerHTML = '';

    var tagr  = document.createElement("tr");
    var tagd;

        for (var i=0;i<arraypersonas.length;i++){
            tagr = document.createElement("tr");
            element.appendChild(tagr);

            tagd = document.createElement("td");
            tagd.textContent=arraypersonas[i].fullName;
            tagr.appendChild(tagd);    
        }
}



function añadir(nombre, apellido_uno, apellido_dos){
    if(nombre||apellido_uno||apellido_dos){
        arraypersonas.push(new Persona(nombre,apellido_uno,apellido_dos));
        actualizar();
    }
}



function borrar(){
    arraypersonas.pop();
    actualizar();
}