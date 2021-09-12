import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoArtefactoComponent } from './tipo-artefacto/tipo-artefacto.component';
import { RegistroTipoArtefactoComponent } from './registro-tipo-artefacto/registro-tipo-artefacto.component';
import { RegistroComponent } from './registro-tipo-artefacto/registro/registro.component';

const routes: Routes = [
  {path: 'registro', component: RegistroTipoArtefactoComponent},
  {path: 'tipo-artefacto', component: RegistroComponent},
  {path: '', component: TipoArtefactoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoArtefactoRoutingModule { }
