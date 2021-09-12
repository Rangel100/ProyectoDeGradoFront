import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoArtefacto } from 'src/app/models/tipoArtefacto';
import { TipoArtefactoService } from '../../../../services/tipo-artefacto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  tiarId: number;
  tipoArtefactoConsulta: TipoArtefacto;

  constructor(
    private formBuilder:FormBuilder,
    private tipoArtefactoService:TipoArtefactoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.tiarId= Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("id"));
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'nombre': ['', [Validators.required]],
      'codigo': ['', [Validators.required]],
    });

    if (this.tiarId) {
      this.consultarTipoArtefacto();
    }
  }

  crearTipoArtefacto(){
    if (this.form.valid) {
      
      let tipoArtefacto: TipoArtefacto = new TipoArtefacto();

      tipoArtefacto.nombre = this.form.controls.nombre.value;
      tipoArtefacto.codigo = this.form.controls.codigo.value;
      
      this.tipoArtefactoService.crearTipoArtefacto(tipoArtefacto).subscribe(d=>{
        if (d) {
          console.log(d);
          this.router.navigate(["tipo-artefacto"]);
        }
      },error =>{
        console.log(error);
      });

    }
  }

  consultarTipoArtefacto(){
    this.tipoArtefactoService.consultarTipoArtefacto(this.tiarId).subscribe(d=>{
      if (d) {
        this.tipoArtefactoConsulta = d;

        this.form.controls.nombre.setValue(this.tipoArtefactoConsulta.nombre);
        this.form.controls.codigo.setValue(this.tipoArtefactoConsulta.codigo);
        
      }
    },error =>{
      console.log(error);
    });
  }

  editar(){
    if (this.form.valid) {
      
      let tipoArtefacto: TipoArtefacto = this.tipoArtefactoConsulta;

      tipoArtefacto.nombre = this.form.controls.nombre.value;
      tipoArtefacto.codigo = this.form.controls.codigo.value;
      
      this.tipoArtefactoService.actualizarTipoArtefacto(tipoArtefacto).subscribe(d=>{
        if (d) {
          console.log(d);
          
          this.router.navigate(["tipo-artefacto"]);
        }
      },error =>{
        console.log(error);
      });

    }
  }

}
