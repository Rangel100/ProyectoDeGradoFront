import { Component, OnInit } from '@angular/core';
import { Artefacto } from 'src/app/models/artefacto';
import { ArtefactoService } from '../../../../services/artefacto.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-artefacto',
  templateUrl: './lista-artefacto.component.html',
  styleUrls: ['./lista-artefacto.component.css']
})
export class ListaArtefactoComponent implements OnInit {

  usuaId: number;

  listaArtefactos: Artefacto[];

  constructor(
    private artefactoService:ArtefactoService,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.usuaId= Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("id"));
    // this.usuaId = 1;
  }

  ngOnInit(): void {
    if (this.usuaId) {
      this.getArtefactos();
    }
  }

  getArtefactos(){
    this.artefactoService.consultarArtefactosPorUsuario(this.usuaId).subscribe(d =>{
      if (d) {
        console.log(d);
        this.listaArtefactos=d;
        
      }
    });
  }

  desactivar(item){
    console.log(item);
    this.artefactoService.eliminarArtefacto(item).subscribe(d=>{
      this.getArtefactos();
    });
  }

}
