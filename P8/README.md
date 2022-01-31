## Práctica de introducción de Star Wars

**Funcionalidad de la práctica**

Toda la funcionalidad dentro de la práctica de Star Wars se encentra dentro del archivo Function.js, con el cual, mediante JQUERY controlamos los eventos que hemos creado para hacer la introducción lo más parecida posible a la original.

La funcion scale será la encargada de recrear las letras amarillas que sirven de introducción a la pelicula contando la historia.

```JS
    function scale(){
	size = size - scaleDelta;
	posY = posY -delta;
	if(posY<80){
		delta = 0.4;
		scaleDelta = 0.006; 
	}
	if(posY<40){
		delta = 0.2;			 	
		scaleDelta = 0.003; 
	}
	if(posY<20){
		delta = 0.1;			 	
		scaleDelta = 0.001; 
	}
	$(".intro").css({'top' : posY + "%","transform" : "rotateX(" + ang + "deg) scale(" + size + ")"})

	if(posY> -30){
		setTimeout(scale,speed);	
	}else{
		$(".intro").animate({opacity:"0"},500);
	}	
```

Gracias a los elementos hide() escondemos el texto amarillo y dejamos el fondo en oscuro. Con setTimeout() le indicamos que la introducción aparezca a los 5 segundos de iniciar la página, y con un fadeOut comenzamos exponiendo las letras azules y haciendo que desaparezcan a los 4 segundos.

```JS
    $(".intro").hide();

	setTimeout(function(){
		scale();
		$(".intro").show();
	},5000);

	$(".letras-inicio").fadeOut(4000);
```

Por último, indicamos que cuando el usuario clicke en la pantalla, la música que hemos introducido en el index, se desmutee y comience a reproducirse.

```JS
    const musica = $("body #sonido")[0]
	$(window).click(()=>{
		musica.muted = !musica.muted
		musica.play()
	});
```
