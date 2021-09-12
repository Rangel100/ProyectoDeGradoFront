import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  arteId: number;
  usuaIdSelected: number;
  tiusId: number;
  artefactoConsulta:Artefacto;

  constructor(
    private formBuilder:FormBuilder,
    private artefactoService: ArtefactoService,
    private tipoArtefactoService:TipoArtefactoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.arteId= Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("id"));
    this.usuaIdSelected= Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("usuaId"));
    this.tiusId= Number.parseInt(localStorage.getItem('tiusId'));
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'codigo': ['', [Validators.required]],
      'url': ['', [Validators.required]],
      'tipoArtefacto': ['', [Validators.required]],
      'codigoUsuario': ['', [Validators.required]],
    });

    if (this.arteId) {
      this.consultarArtefacto();
    } else {
      this.getData();
    }
  }

  getData(){
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

  consultarArtefacto(){
    this.artefactoService.consultarArtefacto(this.arteId).subscribe(d=>{
      if (d) {
        console.log(d);
        
        this.artefactoConsulta = d;
  
        this.form.controls.codigo.setValue(this.artefactoConsulta.codigo);
        this.form.controls.url.setValue(this.artefactoConsulta.url);
        this.form.controls.tipoArtefacto.setValue(this.artefactoConsulta.tiarId_TipoArtefacto);
        this.form.controls.codigoUsuario.setValue(this.artefactoConsulta.codigoUsuario);
  
        this.getData();
      }
    },error =>{
      console.log(error);
    });
  }

  editar(){
    if (this.form.valid) {
      let artefacto: Artefacto = this.artefactoConsulta;

      artefacto.codigo =this.form.controls.codigo.value;
      artefacto.url =this.form.controls.url.value;
      artefacto.tiarId_TipoArtefacto =this.form.controls.tipoArtefacto.value;
      artefacto.codigoUsuario =this.form.controls.codigoUsuario.value;

      this.artefactoService.actualizarArtefacto(artefacto).subscribe(d=>{
        if (d) {
          if (this.tiusId === 1) {
            // console.log('admin');
            
            this.router.navigate(["artefacto/lista-usuario"], { queryParams: { id: this.usuaIdSelected } });
          } if (this.tiusId === 2) {
            // console.log('usua');
            
            this.router.navigate(["artefacto/lista-usuario-artefacto"]);
          }
        }
      },error =>{
        console.log(error);
      });
    }
  }

}
