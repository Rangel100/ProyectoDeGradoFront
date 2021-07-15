import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoArtefactoService {

  url: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.url = environment.URL + 'tipoArtefacto/'
  }

  public consultarTipoArtefactoActivos(): Observable<any> {
    return this.httpClient.get(this.url + 'consultarTipoArtefactoActivos');
  }
}
