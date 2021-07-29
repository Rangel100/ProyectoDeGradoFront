import { Component, OnInit } from '@angular/core';
import { Artefacto } from 'src/app/models/artefacto';
import { ArtefactoService } from '../../../../services/artefacto.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
  ) { 
    this.usuaId= Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("id"));
    // this.usuaId = 2;
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
    },error =>{
      console.log(error);
    });
  }

  desactivar(item){
    this.artefactoService.eliminarArtefacto(item).subscribe(d=>{
      this.getArtefactos();
    },error =>{
      console.log(error);
    });
  }

  editar(item){
    this.router.navigate(['artefacto'], { queryParams: { id: item.arteId, usuaId: this.usuaId }});
  }

}
