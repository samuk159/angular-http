import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  public buscarUsuarios(): Observable<any> {
    return this.http
      .get('https://randomuser.me/api?nat=BR&results=5');
  }
}
