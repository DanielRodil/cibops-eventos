import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GestionjudicialImpl } from '../../models/gestionjudicial-impl';
import { OperacionImpl } from '../../models/operacion-impl';
import { EventoService } from '../../service/evento.service';
import { OperacionService } from '../../service/operacion.service';

@Component({
  selector: 'app-gestionjudicial-consultar-form',
  templateUrl: './gestionjudicial-consultar-form.component.html',
  styleUrls: ['./gestionjudicial-consultar-form.component.css']
})
export class GestionjudicialConsultarFormComponent implements OnInit {

  gestionjudicial: GestionjudicialImpl = new GestionjudicialImpl();
  operacion: OperacionImpl = new OperacionImpl();

  private host: string = environment.host;
  private urlEndPointGJ: string = `${this.host}gestionesjudiciales`

  constructor(private eventoService: EventoService,
              private operacionService: OperacionService, 
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    let id: string = this.cargarGestionJudicial();
    this.eventoService.getGestionJudicial(id).subscribe(response => 
      this.gestionjudicial = this.eventoService.mapearGestionesJudiciales(response));
    setTimeout(() => {
      this.http.get<any>(`${this.urlEndPointGJ}/${id}/operacion`).subscribe(res => this.operacion.nombre = this.operacionService.mapearOperacion(res).nombre); }, 500);
  }

  cargarGestionJudicial(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
