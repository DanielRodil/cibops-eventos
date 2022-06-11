import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actividadoperativa } from '../models/actividadoperativa';
import { ActividadoperativaImpl } from '../models/actividadoperativa-impl';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private host: string = environment.host;
  private urlEndPointEventosOp1: string = `${this.host}operaciones/1/eventos`

  constructor(private http: HttpClient) { }
  
  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  getEventosOp1(): Observable<any>{
    return this.http.get<any>(this.urlEndPointEventosOp1);
  }

  extraerAOOp1(respuestaApi: any): ActividadoperativaImpl[] {
    const AOOp1: ActividadoperativaImpl[] = [];
    respuestaApi._embedded.actividadesoperativas.forEach((p: any) => {
      AOOp1.push(this.mapearAOOp1(p));

    });
    return AOOp1;
  }

  mapearAOOp1(AOOp1Api: any): ActividadoperativaImpl {
    let AOOp1: ActividadoperativaImpl = new ActividadoperativaImpl();
    AOOp1.eventoId = this.getId(AOOp1Api._links.actividadoperativa.href);
    AOOp1.nombre = AOOp1Api.nombre;
    AOOp1.descripcion = AOOp1Api.descripcion;
    AOOp1.gastos = AOOp1Api.gastos;
    return AOOp1;
  }

}
