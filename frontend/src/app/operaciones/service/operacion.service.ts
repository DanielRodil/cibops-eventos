import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';

@Injectable({
  providedIn: 'root'
})

export class OperacionService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}operaciones`

  constructor(private http: HttpClient) { }

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  getOperaciones(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerOperaciones(respuestaApi: any): Operacion[] {
    const operaciones: Operacion[] = [];
    respuestaApi._embedded.operaciones.forEach((p: any) => {
      operaciones.push(this.mapearOperacion(p));

    });
    return operaciones;
  }

  mapearOperacion(operacionApi: any): OperacionImpl {
    let operacion: Operacion = new OperacionImpl();
    operacion.operacionId = this.getId(operacionApi._links.operacion.href);
    operacion.nombre = operacionApi.nombre;
    operacion.descripcion = operacionApi.descripcion;
    operacion.fechaApertura = operacionApi.fechaApertura;
    operacion.fechaCierre = operacionApi.fechaCierre;
    operacion.urlOperacion = operacionApi._links.operacion.href;
    operacion.agente = operacionApi._links.agente.href;
    return operacion;
  }

  addOperacion(operacion: Operacion): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, operacion).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  deleteOperacion(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  updateOperacion(operacion: Operacion): Observable<any> {
    return this.http.patch(`${this.urlEndPoint}/${operacion.operacionId}`, operacion).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  getOperacion(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }  
  

}
