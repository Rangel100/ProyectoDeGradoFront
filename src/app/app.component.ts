import { Component, OnInit } from '@angular/core';
import { TipoUsuarioService } from './services/tipo-usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pdg';

  constructor (
    private tipoUsuarioService:TipoUsuarioService,
  ){}

  ngOnInit(): void {

    this.tipoUsuarioService.consultarTiposUsuario().subscribe(data=>{
      console.log(data);
    });
    
  }
}
