import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nombre: String = "";
  public apellido: String = ""

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    
  }

  ngOnInit(): void {
    this._route.params.subscribe((param: Params) => {
      this.nombre =( param.nombre != undefined ? param.nombre : "");
      this.apellido = ( param.apellido != undefined ? param.apellido : "");
      console.log(param);
    })
  }

  

 redirigir(){
   this._router.navigate(['/Zapatillas']);
 }

}
