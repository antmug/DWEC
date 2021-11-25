class Persona{

    get nombre(){
        return this._nombre;
    }
    get apellido_uno(){
        return this._apellido_uno;
    }
    get apellido_dos(){
        return this._apellido_dos;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido_uno(apellido_uno){
        this._apellido_uno = apellido_uno;
    }
    set apellido_dos(apellido_dos){
        this._apellido_dos = apellido_dos;
    }

    constructor(nombre, apellido_uno, apellido_dos){
        this.nombre = nombre;
        this.apellido_uno = apellido_uno;
        this.apellido_dos = apellido_dos;
    }
    get fullName(){
        return this.nombre + " " + this.apellido_uno + " " + this.apellido_dos;
    }
}

let persona_uno = new Persona("Antonio","Muñoz","Garcia");
let persona_dos = new Persona("Rafael", "Lopez", "De Vera");
let persona_tres = new Persona("Alfonso", "Ramirez", "Crespo");

let arraypersonas = new Array(persona_uno, persona_dos, persona_tres);