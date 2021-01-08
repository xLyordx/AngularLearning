import { Component } from '@angular/core';
import { Configuracion } from './Models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title;  
  public config = Configuracion;

  constructor(){
    this.title = Configuracion.titulo;    
  }

}
