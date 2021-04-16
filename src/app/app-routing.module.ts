import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';

const routes: Routes = [
  { path : 'personajes', component: PersonajesComponent },
  { path : 'profesores', component: ProfesoresComponent },
  { path : 'estudiantes', component: EstudiantesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
