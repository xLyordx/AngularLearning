import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../Models/ContactoUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: ContactoUsuario;

  constructor() { 
    this.usuario = new ContactoUsuario('','','','');    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('Evento on submit ejecutado');
    console.log(this.usuario);
  }
}
