import { Component, OnInit } from '@angular/core';
import { Zapatilla } from './../Models/Zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  public titulo = "Componente de Zapatillas";
  public Zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;

  constructor() {
    this.marcas = new Array();
    this.color = "Amarillo";
    this.Zapatillas = [
      new Zapatilla("Reebok", "Reebok", "roja", 200, true),
      new Zapatilla("Adidas", "Adidas", "verde", 300, false),
      new Zapatilla("Choopper", "Adidas", "naranja", 100, true),
      new Zapatilla("Venus", "Pobre pero solicitada", "blanco", 20, true),
      new Zapatilla("ChocoMilk", "Choclets", "cafe", 50, false),
      new Zapatilla("ZapatillasAlan", "Alan", "cafe", 80, true)
    ];

  }

  ngOnInit(): void {
    console.log(this.Zapatillas);
    this.extraerMarcas();
  }

  extraerMarcas(): void {
    this.Zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0)
        this.marcas.push(zapatilla.marca);
    })
    console.log(this.marcas);
  }


}
