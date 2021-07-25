import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.url = environment.URL + 'usuario/'
  }

  public crearUsuario(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.url + 'crearUsuario', usuario);
  }

  public consultarUsuario(id: number): Observable<any> {
    return this.httpClient.post(this.url + 'consultarUsuario', id);
  }

  public consultarUsuarios(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.url + 'consultarUsuarios', usuario);
  }

  public actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.url + 'actualizarUsuario', usuario);
  }

  public consultarUsuariosPorCodigo(codigo: string): Observable<any> {
    return this.httpClient.post(this.url + 'consultarUsuariosPorCodigoOrm', codigo);
  }
}
