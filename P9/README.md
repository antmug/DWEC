## Práctica de AJAX

**Funcionalidad de la práctica**

En esta práctica se nos pide que a través de peticiones de AJAX añadamos contenido a una página web, donde se deberán mostrar los diferentes centros MEDAC de Córdoba. Esto se hará nada mas cargar la página web, añadiendo además dos botones para poder pedir información de cada uno de estos, junto con su ubicación.

Pasamos ahora a describir brevemente lo más característico de esta funcionalidad:

```JS
		function cargarCentros(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				cargarXML(this);
			}
		};      
		xhr.open("GET","centros.xml",true);    
		xhr.send();
```

Con esta funcion cargaremos el documento XML y le indicamos que se va a ejecutar por cada cambio de estado, que será la siguiente funcion que se describe. para finalizar con esta, decir que los últimos pasos de esta función serán abrir el documento XML indicándole el método de envio, la URL, y true para indicarle que es de manera asíncrona, junto con enviarlo.

```JS
    function cargarXML(xml){
            var docXML = xml.responseXML;
            var tabla = "<thead class='thead-light'><tr><th>Nombre</th><th>Dirección</th><th>Latitud</th><th>Longitud</th><th>Mas informacion</th></tr></thead>";
            console.log(docXML);
            var cent = docXML.getElementsByTagName("centro");
            for(var i=0; i<cent.length; i++){
                tabla += "<tr><td>";
                tabla += cent[i].getElementsByTagName("nombre")[0].textContent;
                tabla += "</td><td>";
                tabla += cent[i].getElementsByTagName("direccion")[0].textContent;
                tabla += "</td><td>";
                tabla += cent[i].getElementsByTagName("latitud")[0].textContent;
                tabla += "</td><td>";
                tabla += cent[i].getElementsByTagName("longitud")[0].textContent;
                tabla += "</td><td>";
                tabla += "<button type='submit' class='btn btn-primary' id='" + cent[i].getElementsByTagName('nombre')[0].textContent +"'>Buscar</button>";
                tabla += "</td></tr>"
            }
            
            document.getElementById("tabla-centros").innerHTML = tabla;
```

En la función cargarXML(), lo que hacemos en primer lugar es guardar la información obtenida con la solicitud anterior, crear una variable llamada tabla, donde para comenzar le indicaremos todos los apartados de esta, y despues creamos un filtro donde obtengamos, de los elementos llamados centro, todo lo que vamos a necesitar para rellenar esta tabla, junto con un boton al final que señale a cada centro para despues poder identificarlo.

```JS
    $(".mapa").empty();
              $(".mapa").append(
                `<img class="rounded-2xl" width="600" src="https://maps.googleapis.com/maps/api/staticmap?center=${centro}&zoom=17&scale=1&size=600x300&maptype=roadmap&key=AIzaSyCe6vLtNKcC6H585-oKcNXXUDA2fOALEs8&format=png&visual_refresh=true" alt="Google Map of MEDAC Arena">`
              );
```

Para finalizar, esta seria la llamada de la API de Google Maps indicando la localización del centro.