import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  url: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.url = environment.URL + 'tipoUsuario/'
  }

  public consultarTiposUsuario(): Observable<any> {
    return this.httpClient.get(this.url + 'consultarTipoUsuarioActivos');
  }
}
