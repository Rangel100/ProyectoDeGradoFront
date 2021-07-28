import { Component, OnInit } from '@angular/core';
import { TipoArtefactoService } from '../../../../services/tipo-artefacto.service';
import { TipoArtefacto } from '../../../../models/tipoArtefacto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tipo-artefacto',
  templateUrl: './lista-tipo-artefacto.component.html',
  styleUrls: ['./lista-tipo-artefacto.component.css']
})
export class ListaTipoArtefactoComponent implements OnInit {

  listaTipoArtefactos:TipoArtefacto[];

  constructor(
    private tipoArtefactoService:TipoArtefactoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.consultarTipoArtefactos();
  }

  consultarTipoArtefactos(){
    this.tipoArtefactoService.consultarTipoArtefactoActivos().subscribe(d=>{
      
      this.listaTipoArtefactos = d;
    });
  }

  editar(item){
    this.router.navigate(["tipo-artefacto/registro"], { queryParams: { id: item.tiarId } });
  }

  desactivar(item){
    let tipoArtefacto: TipoArtefacto = new TipoArtefacto();

    tipoArtefacto.tiarId = item.tiarId;

    this.tipoArtefactoService.eliminarTipoArtefacto(tipoArtefacto).subscribe(d=>{
      if (d) {
        console.log(d);
        this.consultarTipoArtefactos();
      }
    },error =>{
      console.log(error);
    });
  }

  crearTipoArtefacto(){
    this.router.navigate(["tipo-artefacto/registro"]);
  }

}
