// Importo los modulos de angular para el manejo del enrutamiento
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//Importo los modulos que voy a enrutar
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternosComponent } from './externos/externos.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Zapatillas', component: ZapatillasComponent },
    { path: 'VideoJuegos', component: VideojuegosComponent },
    { path: 'Cursos', component: CursosComponent },
    { path: 'Externos', component: ExternosComponent },
    { path: 'Cursos/:nombre', component: CursosComponent },
    { path: 'Cursos/:nombre/:apellido', component: CursosComponent },
    { path: '**', component: HomeComponent }    
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
