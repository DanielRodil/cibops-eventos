import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agente } from '../models/agente';
import { AgenteImpl } from '../models/agente-impl';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}agentes`

  constructor(private http: HttpClient) { }

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  getAgentes(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerAgentes(respuestaApi: any): Agente[] {
    const agentes: Agente[] = [];
    respuestaApi._embedded.agentes.forEach((p: any) => {
      agentes.push(this.mapearAgente(p));

    });
    return agentes;
  }

  mapearAgente(agenteApi: any): AgenteImpl {
    let agente: Agente = new AgenteImpl();
    agente.agenteId = this.getId(agenteApi._links.agente.href);
    agente.tip = agenteApi.tip;
    agente.urlAgente = agenteApi._links.agente.href;
    return agente;
  }

}
