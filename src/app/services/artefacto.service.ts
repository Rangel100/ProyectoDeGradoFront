import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artefacto } from '../models/artefacto';

@Injectable({
  providedIn: 'root'
})
export class ArtefactoService {

  url: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.url = environment.URL + 'artefacto/'
  }

  public crearArtefacto(artefacto: Artefacto): Observable<any> {
    return this.httpClient.post(this.url + 'crearArtefacto', artefacto);
  }

  public consultarArtefactosPorUsuario(usuaId: number): Observable<any> {
    return this.httpClient.post(this.url + 'consultarArtefactosPorUsuario', usuaId);
  }

  public eliminarArtefacto(artefacto: Artefacto): Observable<any> {
    return this.httpClient.post(this.url + 'eliminarArtefacto', artefacto);
  }

  public consultarArtefacto(id: number): Observable<any> {
    return this.httpClient.post(this.url + 'consultarArtefacto', id);
  }

  public actualizarArtefacto(artefacto: Artefacto): Observable<any> {
    return this.httpClient.post(this.url + 'actualizarArtefacto', artefacto);
  }
}
