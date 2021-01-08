import { from } from "rxjs";
import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuegos.component.html',
    styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit , DoCheck, OnDestroy{
    public titulo:string;
    public juegos:Array<string>;   


    constructor() {
        this.titulo= "Listado de Juegos Cargados";
        this.juegos= ["GTA","The Witcher","Mario", "Watch Dogs"];
        

        console.log('Se ha cargado el componente videjuego');
        console.log(this.juegos);
    }

    ngOnInit(){
        console.log('Se ha ejecutado el onInit');
    }

    ///Cuando se produce algún cambio en el codigo.
    ngDoCheck(){
        console.log('doCheck ejecutado');
    }

    ngOnDestroy()
    {
        console.log('OnDestroy ejecutado;');
    }

    cambiarTitulo(){
        this.titulo= 'Listado de Video Juegos';
    }

    

}