import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoArtefacto } from '../models/tipoArtefacto';

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

  public crearTipoArtefacto(tipoArtefacto: TipoArtefacto): Observable<any> {
    return this.httpClient.post(this.url + 'crearTipoArtefacto', tipoArtefacto);
  }

  public consultarTipoArtefacto(id: number): Observable<any> {
    return this.httpClient.post(this.url + 'consultarTipoArtefacto', id);
  }

  public actualizarTipoArtefacto(tipoArtefacto: TipoArtefacto): Observable<any> {
    return this.httpClient.post(this.url + 'actualizarTipoArtefacto', tipoArtefacto);
  }
  
  public eliminarTipoArtefacto(tipoArtefacto: TipoArtefacto): Observable<any> {
    return this.httpClient.post(this.url + 'eliminarTipoArtefacto', tipoArtefacto);
  }

}
