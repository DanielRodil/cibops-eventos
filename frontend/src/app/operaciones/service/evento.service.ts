import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actividadoperativa } from '../models/actividadoperativa';
import { ActividadoperativaImpl } from '../models/actividadoperativa-impl';
import { GestionjudicialImpl } from '../models/gestionjudicial-impl';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}operaciones`

  constructor(private http: HttpClient) { }
  
  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  extraerActividadesOperativas(respuestaApi: any): ActividadoperativaImpl[] {
    const actividadesoperativas: ActividadoperativaImpl[] = [];
    respuestaApi._embedded.actividadesoperativas.forEach((p: any) => {
      actividadesoperativas.push(this.mapearActividadesOperativas(p));
    });
    return actividadesoperativas;
  }

  mapearActividadesOperativas(actividadoperativaAPI: any): ActividadoperativaImpl {
    let actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();
    actividadoperativa.eventoId = this.getId(actividadoperativaAPI._links.actividadoperativa.href);
    actividadoperativa.nombre = actividadoperativaAPI.nombre;
    actividadoperativa.descripcion = actividadoperativaAPI.descripcion;
    actividadoperativa.gastos = actividadoperativaAPI.gastos;
    return actividadoperativa;
  }

  extraerGestionesJudiciales(respuestaApi: any): GestionjudicialImpl[] {
    const gestionesjudiciales: GestionjudicialImpl[] = [];
    respuestaApi._embedded.gestionesjudiciales.forEach((p: any) => {
      gestionesjudiciales.push(this.mapearGestionesJudiciales(p));
    });
    return gestionesjudiciales;
  }

  mapearGestionesJudiciales(gestionjudicialAPI: any): GestionjudicialImpl {
    let gestionjudicial: GestionjudicialImpl = new GestionjudicialImpl();
    gestionjudicial.eventoId = this.getId(gestionjudicialAPI._links.gestionjudicial.href);
    gestionjudicial.nombre = gestionjudicialAPI.nombre;
    gestionjudicial.descripcion = gestionjudicialAPI.descripcion;
    gestionjudicial.organoJudicial = gestionjudicialAPI.organoJudicial;
    return gestionjudicial;
  }

  getEventosOperacion(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}/eventos`).pipe(
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
