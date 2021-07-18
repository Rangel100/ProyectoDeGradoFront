import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtefactoUsuarioComponent } from './artefacto-usuario/artefacto-usuario.component';
import { RegistroArtefactoComponent } from './registro-artefacto/registro-artefacto.component';
import { RegistroComponent } from './registro-artefacto/registro/registro.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'artefacto', component: RegistroArtefactoComponent},
  {path: 'lista-usuario', component: ArtefactoUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtefactoRoutingModule { }
