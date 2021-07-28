import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from '../../../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  form: FormGroup;

  listaUsuarios:Usuario[];

  constructor(
    private formBuilder:FormBuilder,
    private usuarioService:UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'nombre': [''],
      'codigo': ['']
    });

    this.consultarUsuarios();
  }

  consultarUsuarios(){
    if (this.form.valid) {
      let usuario: Usuario = new Usuario();

      usuario.nombre = this.form.controls.nombre.value;
      usuario.codigo = this.form.controls.codigo.value;

      this.usuarioService.consultarUsuarios(usuario).subscribe(d =>{       
        this.listaUsuarios = d;        
      });

    }
  }

  artefactos(item){
    this.router.navigate(["artefacto/lista-usuario"], { queryParams: { id: item.usuaId } });
  }

  editar(item){
    this.router.navigate(["usuario/registro"], { queryParams: { id: item.usuaId } });
  }

  desactivar(item){
    let usuario: Usuario = new Usuario();

    usuario.usuaId = item.usuaId;
    this.usuarioService.eliminarUsuario(usuario).subscribe(d=>{
      if (d) {
        console.log(d);
        this.consultarUsuarios();
      }
    },error =>{
      console.log(error);
    });
  }
  
  crearUsuario(){
    this.router.navigate(["usuario/registro"]);
  }

  limpiar(){
    this.form.reset();
    this.consultarUsuarios();
  }
}
