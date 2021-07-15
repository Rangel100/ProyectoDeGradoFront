import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artefacto } from 'src/app/models/artefacto';
import { TipoArtefacto } from '../../../../models/tipoArtefacto';
import { ArtefactoService } from '../../../../services/artefacto.service';
import { TipoArtefactoService } from '../../../../services/tipo-artefacto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  tipoArtefactoList: TipoArtefacto[];
  

  constructor(
    private formBuilder:FormBuilder,
    private artefactoService: ArtefactoService,
    private tipoArtefactoService:TipoArtefactoService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'codigo': ['', [Validators.required]],
      'url': ['', [Validators.required]],
      'tipoArtefacto': ['', [Validators.required]],
      'codigoUsuario': ['', [Validators.required]],
    });

    this.getTipoArtefacto();
  }

  getTipoArtefacto(){
    this.tipoArtefactoService.consultarTipoArtefactoActivos().subscribe(d => {
      if (d) {
        console.log(d);
        this.tipoArtefactoList = d;
      }
    });
  }

  crearArtefacto(){
    if (this.form.valid) {
      let artefacto: Artefacto = new Artefacto();

      artefacto.codigo = this.form.controls.codigo.value;
      artefacto.url = this.form.controls.url.value;
      artefacto.tiarId_TipoArtefacto = this.form.controls.tipoArtefacto.value;
      artefacto.codigoUsuario = this.form.controls.codigoUsuario.value;

      // console.log(artefacto);
      
      this.artefactoService.crearArtefacto(artefacto).subscribe(d =>{
        if (d) {
          console.log(d);
        }
      },error =>{
        console.log(error);
      });

    }

  }

}
