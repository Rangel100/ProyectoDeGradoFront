import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro-usuario/registro/registro.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: 'registro', component: RegistroUsuarioComponent},
  {path: 'usuario', component: RegistroComponent},
  {path: '', component: UsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
