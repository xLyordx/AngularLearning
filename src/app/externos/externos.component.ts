import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './../servicios/peticiones.service'

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css'],
  providers: [PeticionesService]
})
export class ExternosComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: Date;
  public nuevoUser: any;

  constructor(
    private _peticiones: PeticionesService
  ) {
    this.userId = 1;
    this.fecha = new Date();
    this.nuevoUser = {
      "name": "",
      "job": ""
    };
    console.log(this.nuevoUser);
  }

  ngOnInit(): void {
    this.cargarUsuario();

    setInterval(() => {
      this.actualizarFecha();
    }, 1000);
  }

  cargarUsuario() {
    this.user = undefined;

    this._peticiones.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        this.user = undefined;
        console.log(<any>error);
      }
    );
  }

  actualizarFecha() {
    this.fecha = new Date();
  }

  onSubmit(_newUser:any){
    this._peticiones.addUser(this.nuevoUser).subscribe(
      response => {
        console.log(response);
        _newUser.reset();
      },
      error => {
        console.log("fail:")
        console.log(error);
      }
      
    );
  }


}
