import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtefactoRoutingModule } from './artefacto-routing.module';
import { RegistroArtefactoComponent } from './registro-artefacto/registro-artefacto.component';
import { RegistroComponent } from './registro-artefacto/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtefactoUsuarioComponent } from './artefacto-usuario/artefacto-usuario.component';
import { ListaArtefactoComponent } from './artefacto-usuario/lista-artefacto/lista-artefacto.component';
import { UsuarioArtefactoComponent } from './usuario-artefacto/usuario-artefacto.component';
import { ListaUsuarioArtefactosComponent } from './usuario-artefacto/lista-usuario-artefactos/lista-usuario-artefactos.component';


@NgModule({
  declarations: [
    RegistroArtefactoComponent,
    RegistroComponent,
    ArtefactoUsuarioComponent,
    ListaArtefactoComponent,
    UsuarioArtefactoComponent,
    ListaUsuarioArtefactosComponent
  ],
  imports: [
    CommonModule,
    ArtefactoRoutingModule,

    ReactiveFormsModule,
    FormsModule
  ]
})
export class ArtefactoModule { }
