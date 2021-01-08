import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificador: boolean;

  constructor() {
    this.identificador = false;

  }

  setIdentificado() {
    this.identificador = !this.identificador;
  }

  ngOnInit(): void {
  }

}
