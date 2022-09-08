export class Persona {
    private RUT: string;
    public nombre: string;
    public edad: number;
    constructor(RUT: string, nombre: string, edad: number){
        this.RUT = RUT;
        this.nombre = nombre;
        this.edad = edad
    }

    getRut(){
        return this.RUT;
    }
}

export class Trabajador extends Persona{
    private sueldo: number;
    private contratoIndefinido: boolean;

    constructor(RUT: string, nombre: string, edad: number, contratoIndefinido:boolean, sueldo: number){
        super(RUT, nombre, edad);
        this.sueldo = sueldo
        this.contratoIndefinido = contratoIndefinido;
    }

    getSueldo(){
        return this.sueldo;
    }

    getContratoIndefinido(){
        return this.contratoIndefinido
    }

    aumentarSueldo(porcentaje:number){
        this.sueldo = this.sueldo + ((this.sueldo * porcentaje)/100);
    }

}