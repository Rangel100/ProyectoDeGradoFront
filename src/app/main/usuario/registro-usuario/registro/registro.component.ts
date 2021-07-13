import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoUsuarioService } from '../../../../services/tipo-usuario.service';
import { TipoUsuario } from '../../../../models/tipoUsuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  tipoUsuariosList: TipoUsuario[];
  

  constructor(
    private formBuilder:FormBuilder,
    private tipoUsuarioService:TipoUsuarioService,
    private usuarioService:UsuarioService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'nombre': ['', [Validators.required]],
      'apellido': ['', [Validators.required]],
      'tipoUsuario': ['', [Validators.required]],
      'codigo': ['', [Validators.required]],
      'direccion': ['', [Validators.required]],
    });

    this.getTipoUsuarios();
  }

  getTipoUsuarios(){
    this.tipoUsuarioService.consultarTiposUsuario().subscribe(d =>{
      if (d) {
        console.log(d);
        this.tipoUsuariosList=d;
      }
    });
  }

  crearUsuario(){
    if (this.form.valid) {
      
      let usuario: Usuario = new Usuario();

      usuario.tiusId_TipoUsuario = this.form.controls.tipoUsuario.value;
      usuario.codigo = this.form.controls.codigo.value;
      usuario.direccion = this.form.controls.direccion.value;
      usuario.nombre = this.form.controls.nombre.value;
      usuario.apellido = this.form.controls.apellido.value;

      console.log(usuario);
      
      this.usuarioService.crearUsuario(usuario).subscribe(d =>{
        if (d) {
          console.log(d);
        }
      },error =>{
        console.log(error);
      });

    }

  }

}
