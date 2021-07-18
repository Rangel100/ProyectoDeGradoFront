import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoUsuarioService } from '../../../../services/tipo-usuario.service';
import { TipoUsuario } from '../../../../models/tipoUsuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  tipoUsuariosList: TipoUsuario[];
  
  usuaId: number;
  usuarioConsulta: Usuario;

  constructor(
    private formBuilder:FormBuilder,
    private tipoUsuarioService:TipoUsuarioService,
    private usuarioService:UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.usuaId= Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("id"));
    // this.usuaId = 1;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'nombre': ['', [Validators.required]],
      'apellido': ['', []],
      'tipoUsuario': ['', [Validators.required]],
      'codigo': ['', [Validators.required]],
      'direccion': ['', [Validators.required]],
    });

    if (this.usuaId) {
      this.consultarUsuario();
    } else {
      this.getData();
    }
  }

  getData(){
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

  consultarUsuario(){
    this.usuarioService.consultarUsuario(this.usuaId).subscribe(d =>{
      if (d) {
        this.usuarioConsulta = d;

        this.form.controls.nombre.setValue(this.usuarioConsulta.nombre);
        this.form.controls.tipoUsuario.setValue(this.usuarioConsulta.tiusId_TipoUsuario);
        this.form.controls.codigo.setValue(this.usuarioConsulta.codigo);
        this.form.controls.direccion.setValue(this.usuarioConsulta.direccion);
        
        this.getData();
      }
    });
  }
  
  editar(){ 
    if (this.form.valid) {
      let usuario: Usuario = this.usuarioConsulta;

      usuario.tiusId_TipoUsuario = this.form.controls.tipoUsuario.value;
      usuario.codigo = this.form.controls.codigo.value;
      usuario.direccion = this.form.controls.direccion.value;
      usuario.nombre = this.form.controls.nombre.value;

      console.log(usuario);

      this.usuarioService.actualizarUsuario(usuario).subscribe(d=>{
        if (d) {
          console.log(d);
          
          this.router.navigate(["usuario"]);
        }
      });

    }
  }

}
