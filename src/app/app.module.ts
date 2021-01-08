import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {VideojuegosComponent} from './videojuegos/videojuegos.component';
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    CursosComponent,
    ZapatillasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
