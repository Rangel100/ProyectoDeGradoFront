import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtefactoRoutingModule } from './artefacto-routing.module';
import { RegistroArtefactoComponent } from './registro-artefacto/registro-artefacto.component';
import { RegistroComponent } from './registro-artefacto/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroArtefactoComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    ArtefactoRoutingModule,

    ReactiveFormsModule,
    FormsModule
  ]
})
export class ArtefactoModule { }
