import { Injectable } from '@angular/core';
import { Juego } from './juego';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private urlEndpoint = 'http://localhost:8082/juego/listarjuegos';
  private urlEndpointCreate = 'http://localhost:8082/juego/crearjuego';
  private urlEndpointUpdate = 'http://localhost:8082/juego/actualizarjuegos';
  private urlEndpointDelete = 'http://localhost:8082/juego/borrarjuego';

  private httpHeaders = new HttpHeaders ({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  
  getjuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.urlEndpoint);
  }

  create (juego: Juego): Observable<Juego> {
    return this.http.post<Juego>(this.urlEndpointCreate, juego, {headers: this.httpHeaders});
}

getJuego(idJuego): Observable<Juego> {
  return this.http.get<Juego>(`${this.urlEndpoint}/${idJuego}`);
}

  update(juego: Juego): Observable<Juego> {
    return this.http.put<Juego>(`${this.urlEndpointUpdate}/${juego.idJuego}`,juego, {headers: this.httpHeaders});
  }

  delete(idJuego: number): Observable<Juego> {
    return this.http.delete<Juego>(`${this.urlEndpointDelete}/${idJuego}`,{headers: this.httpHeaders});
  }
}

