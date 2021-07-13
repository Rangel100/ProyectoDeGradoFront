import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroComponent } from './registro-usuario/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroUsuarioComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,

    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsuarioModule { }
