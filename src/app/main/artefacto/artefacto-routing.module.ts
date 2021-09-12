import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtefactoUsuarioComponent } from './artefacto-usuario/artefacto-usuario.component';
import { RegistroArtefactoComponent } from './registro-artefacto/registro-artefacto.component';
import { RegistroComponent } from './registro-artefacto/registro/registro.component';
import { UsuarioArtefactoComponent } from './usuario-artefacto/usuario-artefacto.component';

const routes: Routes = [
  {path: 'artefacto', component: RegistroComponent},
  {path: '', component: RegistroArtefactoComponent},
  {path: 'lista-usuario', component: ArtefactoUsuarioComponent},
  {path: 'lista-usuario-artefacto', component: UsuarioArtefactoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtefactoRoutingModule { }
