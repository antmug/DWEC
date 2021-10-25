# Desarrollo de aplicaciones entorno cliente

## Ataque DoS y DDos. Información sobre cada uno de estos conceptos y un detallar un ejemplo destacado sobre cada uno de estos.

Los ataques Dos y DDos son ataques de denegación de servicio, los cuales tienen como principal objetivo inhabilitar el uso de un sistema con el fin de bloquear todo servicio que este pueda brindar. Su funcionamiento está basado en la cantidad de flujo de peticiones que pueden ser resueltas por un servidor web, es decir, colapsan estos servidores con millones de peticiones hasta que este comienza a ralentizarse o a no dar respuesta y bloquearse.

La principal diferencia entre los ataques Dos y DDos es la cantidad de máquinas o IP 's que realizan el ataque. El ataque Dos (Denial of Service) se realiza con una sola máquina, la cual será la encargada de realizar todas las peticiones para realizar el ataque, mientras que el ataque DDos (Distributed Denial of Service) se realiza con varias máquinas, las cuales pueden participar en el ataque de manera consciente o por medio de algún software que les haya infectado (se denominan bots o zombies), usándose de manera fraudulenta para un ataque controlado por el que la haya podido infectar.

El objetivo de estos ciberataques suele ser provocar una paralización de los servicios tanto del administrador que los puede ofrecer, como a los usuarios, los cuales no podrán consumir estos servicios, lo cual provocaría pérdidas económicas y de prestigio para la empresa encargada de ofrecer el servicio.

Posibles ejemplos de estos ataques serían:

* Ataque Dos a Panix, un importante proveedor de internet de los años 90, el cual estuvo varios días sin poder ofrecer servicio a sus clientes dado el ataque provocado por la inundación SYN.
* Ataque DDos a Yahoo, Amazon, eBay y otros realizado en el año 2000. Un chico llamado MafiaBoy lanzó un ataque solo por diversión y por ver qué era capaz de hacer, haciéndose con el control de varias de las redes universitarias de equipos zombies para su propósito. Este ataque tuvo un impacto de unos 1.200 millones de dólares y fué un punto de inflexión en la seguridad de todas estas empresas y de los protocolos de defensa en general.

## URI

El identificador uniforme de recursos (en inglés URI) es una cadena de caracteres que se utilizan para identificar recursos físicos o abstractos por internet con el propósito de permitir la interacción entre diferentes recursos en internet y otros tipos de redes.
El URI no puede confundirse con la URL, dado que una URL es al fin y al cabo un URI, pero un URI no tiene por qué ser una URL. La URL apunta a una página web o a una parte de esta, mientras que la URI se usa para identificar objetos.
La sintaxis del URI consta de varias partes, siendo obligatorias el scheme y el path y el resto opcionales:

```
	scheme :// authority path ? query # fragment
```

El Scheme nos proporciona la información sobre el protocolo que se está usando, el Authority identifica el dominio, el Path nos da la ruta exacta al recurso que buscamos, la Query es la consulta y el Fragment designará una parte del recurso principal.

## Protocolos de seguridad SSL y TLS y cuándo es usado cada uno

Los protocolos de seguridad SSL (Secure Socket Layer) y TLS (Transport Layer Security) son protocolos de cifrado para la capa de transporte, es decir, que su función es la de cifrar la información entre el cliente y el servidor al realizar las peticiones.

La diferencia principal entre estas dos tecnologías o protocolos de cifrado es que la primera (SSL) surgió en 1995, actualizando cada vez que se descubría una vulnerabilidad en la seguridad, y la segunda (TLS) surgió en 1999 derivada de la primera, siendo una versión mejorada. Al comienzo de su diversificación las diferencias eran muy pequeñas, pero actualmente ya son tan significativas como para no ser compatibles entre ellas.

Hoy en día se recomienda el uso exclusivo de TLS, dado que la tecnología SSL está desactualizada y sin soporte para nuevas actualizaciones.

## Cifrado DES. Información detallada, porqué ya no es usado de forma asidua y ejemplos sobre este tipo de cifrado

El cifrado DES es un algoritmo de clave simétrica publicado en 1976 y retirado en 2005 con la idea de proporcionar un estándar de seguridad criptográfica que ayude a garantizar la conexión entre los diferentes sistemas gubernamentales. 

Esta clase de cifrado está basado en bloques de 64 bits, siendo 8 de esos bits el enlace para unirlos y los 56 restantes la encriptación del código. Esta forma de encriptación tenía un problema, que a mayor capacidad de cómputo de las maquinas, mas facil era de romper y acceder a la información. Esto provocó que con el paso del tiempo surgieran ordenadores lo suficientemente potentes como para descifrar el código en menos de 24 horas, lo que dejaría a esta tecnología obsoleta.

Hoy en día se ha dado paso al cifrado AES, el cual es más robusto dado que puede utilizar diferentes longitudes de clave, desde 128 bits a 256 bits.

Un pequeño ejemplo de texto cifrado mediante DES:

Nuestro texto plano

```
8787878787878787
```
Cifrado seleccionado

```
0E329232EA6D0D73 
```
Texto cifrado que se obtiene

```
0000000000000000
```

## Ataque MID Información detallada sobre este tipo de ataque y ejemplo que explique su funcionamiento. Mencionar también un ejemplo conocido de ataque MID

El ataque MID (Man in the middle) está basado en interceptar la información generada entre dos o más interlocutores, pudiendo incluso llegar a suplantar a alguno de estos o modificar la información que se está interceptando. Estos ataques son muy difíciles de detectar, ya que es su principal propósito.

Existen varios ejemplos de ataques MID , como por ejemplo los basados en servidores DHCP, ARP cache poisoning, los basados en servidores DNS o el de simulación de un punto de acceso inalámbrico.

Este último, por ejemplo, consistiría en recrear un punto de acceso en una red pública, ya sea un negocio, una biblioteca, etc. Lo que hace el atacante es preparar su ordenador como punto de acceso para que los usuarios que se encuentren cerca les proporcionen sus datos sin darse cuenta. El mayor problema de este ataque es que tengas tu dispositivo móvil configurado para elegir el punto de acceso wi-fi con mayor señal, ya que se conectaría directamente si éste la tuviera.

Un ejemplo de este ataque hace ya varios años, fue la macro redada por toda Europa en el 2015, arrestando a unos 49 sospechosos por uso de MID para olfatear solicitudes de pago de grandes empresas europeas, llegando a defraudar un total de 6 millones de euros en todo el continente.

## Ampliar la información proporcionada por el temario sobre las herramientas FTP y SSH

El FTP (File Transfer Protocol utiliza un modelo de cliente/servidor y soporta la transferencia directa de archivos entre el cliente FTP y el servidor web, utilizando dos canales separados para transferir esta información, el canal de comando y el de datos. Estos canales, por defecto, no se encuentran encriptados, por lo que se podría ver que información se está transportando.

El SSH (Secure Shell) es una capa de transporte que se utiliza para proteger los inicios de sesión y la información transmitida entre dos puntos finales mediante la combinación de una criptografía asimétrica y simétrica.

En la actualidad estas dos tecnologías se encuentran unidas en SFTP (SSH File Transfer Protocol) la cual ofrece la misma funcionalidad que FTP, pero añadiendo la seguridad proporcionada por el protocolo SSH, es decir, ahora el SFTP usaría un canal seguro para transferir los archivos, al contrario que pasaba con FTP

