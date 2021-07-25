import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtefactoService } from 'src/app/services/artefacto.service';
import { Artefacto } from '../../../../models/artefacto';

@Component({
  selector: 'app-lista-usuario-artefactos',
  templateUrl: './lista-usuario-artefactos.component.html',
  styleUrls: ['./lista-usuario-artefactos.component.css']
})
export class ListaUsuarioArtefactosComponent implements OnInit {

  usuaId: number;

  listaArtefactos: Artefacto[];

  constructor(
    private artefactoService:ArtefactoService,
    private router: Router,
  ) { 
    this.usuaId = Number.parseInt(localStorage.getItem('usuario'));
  }

  ngOnInit(): void {
    if (this.usuaId) {
      this.getArtefactos();
    }
  }

  getArtefactos(){
    this.artefactoService.consultarArtefactosPorUsuario(this.usuaId).subscribe(d =>{
      if (d) {
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

  cambiarEstado(){
    console.log('cambio estado');
    
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
