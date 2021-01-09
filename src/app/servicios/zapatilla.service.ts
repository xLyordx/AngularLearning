import { Injectable } from "@angular/core";
import { Zapatilla } from "../Models/Zapatilla";

@Injectable()
export class ZapatillaService {
    private Zapatillas: Array<Zapatilla>;

    constructor() {
        this.Zapatillas = [
            new Zapatilla("Reebok", "Reebok", "roja", 200, true),
            new Zapatilla("Adidas", "Adidas", "verde", 300, false),
            new Zapatilla("Choopper", "Adidas", "naranja", 100, true),
            new Zapatilla("Venus", "Pobre pero solicitada", "blanco", 20, true),
            new Zapatilla("ChocoMilk", "Choclets", "cafe", 50, false),
            new Zapatilla("ZapatillasAlan", "Alan", "cafe", 80, true)
        ];
    }

    getDescrition(): string {
        return "Soy el servicio de zapatillas y estoy funcionando";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.Zapatillas;
    }


}

