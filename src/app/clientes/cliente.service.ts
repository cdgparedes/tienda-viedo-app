import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, of, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable({ // indica qu tipo represnta en Angular
  providedIn: 'root'
})
export class ClienteService {
  private urlEndpoint = 'http://localhost:8082/cliente/listaclientes';
  private urlEndpointCreate = 'http://localhost:8082/cliente/crearclientes';
  private urlEndpointUpdate = 'http://localhost:8082/cliente/actualizaclientes';
  private urlEndpointDelete = 'http://localhost:8082/cliente/borrarcliente';


  private httpHeaders = new HttpHeaders ({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  getClientes(): Observable<Cliente[]> {
    // return this.http.get<Cliente[]>(this.urlEndpoint);
    return this.http.get<Cliente[]>(this.urlEndpoint).pipe(
      map( (response) => response as Cliente[])
    );
     // return of(CLIENTES);
  }

  create(cliente: Cliente): Observable<Cliente> {
      return this.http.post(this.urlEndpointCreate, cliente, {headers: this.httpHeaders}).pipe(
        map( (response: any) => response.cliente as Cliente),
        catchError(e => {
          console.error(e.error.mensaje);
          swal( e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })

      );
  }

  getCliente(idCliente): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndpoint}/${idCliente}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        console.log(e.error.mensaje);
        swal('Error al ediar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

    update(cliente: Cliente): Observable<any> {
      return this.http.put<any>(`${this.urlEndpointUpdate}/${cliente.idCliente}`,cliente, {headers: this.httpHeaders}).pipe(
        catchError(e => {
          console.error(e.error.mensaje);
          swal(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
    }

    delete(idCliente: number): Observable<any> {
      return this.http.delete<any>(`${this.urlEndpointDelete}/${idCliente}`,{headers: this.httpHeaders}).pipe(
        catchError(e => {
          console.error(e.error.mensaje);
          swal(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })

      );
    }

}
