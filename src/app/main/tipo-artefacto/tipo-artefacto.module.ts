import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoArtefactoRoutingModule } from './tipo-artefacto-routing.module';
import { TipoArtefactoComponent } from './tipo-artefacto/tipo-artefacto.component';
import { ListaTipoArtefactoComponent } from './tipo-artefacto/lista-tipo-artefacto/lista-tipo-artefacto.component';
import { RegistroTipoArtefactoComponent } from './registro-tipo-artefacto/registro-tipo-artefacto.component';
import { RegistroComponent } from './registro-tipo-artefacto/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TipoArtefactoComponent,
    ListaTipoArtefactoComponent,
    RegistroTipoArtefactoComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    TipoArtefactoRoutingModule,

    ReactiveFormsModule,
    FormsModule
  ]
})
export class TipoArtefactoModule { }
