import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { TareasComponent } from './tareas/tareas.component';
import { LibrosComponent } from './libros/libros.component';
//import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
 // { path: 'home', component: HomeComponent },
 { path: 'home', loadChildren: './home/home.module#HomeModule' },
 // { path: 'home', component: HomeComponent },
  { path: 'tareas',loadChildren: './tareas/tareas.module#HomeModule' },
   // { path: 'home', component: HomeComponent },
  { path: 'contactos',loadChildren: './libros/libros.module#HomeModule' },
   // { path: 'home', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return 'path';
}

