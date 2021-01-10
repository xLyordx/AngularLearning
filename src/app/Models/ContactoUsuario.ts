export class ContactoUsuario{

    constructor(
        public nombre:string,
        public apellido:string,
        public email: string,
        public mensaje: string
    ){

    }

    getNombre():string{
        return this.nombre;
    }

    setNombre(_nombre:string):void{
        this.nombre = _nombre;
    }

    getApellido():string{
        return this.apellido;
    }

    setApellidos(_apellido:string):void{
        this.apellido = _apellido;
    }

    getEmail():string{
        return this.email;
    }

    setEmail(_email:string):void{
        this.email = _email;
    }

    getMensaje():string{
        return this.mensaje;
    }

    setMensaje(_mensaje:string):void{
        this.mensaje = _mensaje;
    }

}