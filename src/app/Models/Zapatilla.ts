export class Zapatilla {
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    constructor(_nombre: string, _marca: string, _color: string, _precio: number, _stock: boolean) {
        this.nombre = _nombre;
        this.marca = _marca;
        this.color = _color;
        this.precio = _precio;
        this.stock = _stock;
    }
}