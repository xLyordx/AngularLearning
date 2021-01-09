import { Component, OnInit } from '@angular/core';
import { Zapatilla } from './../Models/Zapatilla';
import { ZapatillaService } from './../servicios/zapatilla.service';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {

  public titulo = "Componente de Zapatillas";
  public Zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public marca: string;

  constructor(private _ZapatillaService: ZapatillaService) {
    this.marcas = new Array();
    this.color = "yellow";
    this.marca = "";
    this.Zapatillas = [];
  }

  ngOnInit(): void {
    console.log(this.Zapatillas);
    this.extraerMarcas();
    this.Zapatillas = this._ZapatillaService.getZapatillas();
    console.log(this._ZapatillaService.getDescrition());
  }

  extraerMarcas(): void {
    this.Zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0)
        this.marcas.push(zapatilla.marca);
    })
    console.log(this.marcas);
  }

  removeMarca(_indice: number) {
    this.marcas.splice(_indice, 1)
  }

  addMarca() {
    this.marcas.push(this.marca);
  }

  getMarca() {
    alert(this.marca);
  }

  soltarTecla() {
    this.addMarca();
  }

  onBlur() {
    console.log("me sali de la caja");
  }

}
