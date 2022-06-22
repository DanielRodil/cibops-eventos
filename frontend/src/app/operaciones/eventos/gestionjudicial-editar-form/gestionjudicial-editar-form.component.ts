import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GestionjudicialImpl } from '../../models/gestionjudicial-impl';
import { Operacion } from '../../models/operacion';
import { EventoService } from '../../service/evento.service';
import { OperacionService } from '../../service/operacion.service';

@Component({
  selector: 'app-gestionjudicial-editar-form',
  templateUrl: './gestionjudicial-editar-form.component.html',
  styleUrls: ['./gestionjudicial-editar-form.component.css']
})
export class GestionjudicialEditarFormComponent implements OnInit {

  gestionjudicial: GestionjudicialImpl = new GestionjudicialImpl();
  operaciones: Operacion[] = [];

  private host: string = environment.host;
  private urlEndPointGJ: string = `${this.host}gestionesjudiciales`

  constructor(private eventoService: EventoService,
              private operacionService: OperacionService, 
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    let id: string = this.cargarGestionJudicial();
    this.eventoService.getGestionJudicial(id).subscribe(res => 
      this.gestionjudicial = this.eventoService.mapearGestionesJudiciales(res));
    setTimeout(() => {
      this.http.get<any>(`${this.urlEndPointGJ}/${id}/operacion`).subscribe(res => this.gestionjudicial.operacion = this.operacionService.mapearOperacion(res).urlOperacion); }, 500);
    this.operacionService.getOperaciones().subscribe((response) => 
      this.operaciones = this.operacionService.extraerOperaciones(response));  
  }

  cargarGestionJudicial(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEditarGestionJudicial(): void {
    this.eventoService.updateGestionJudicial(this.gestionjudicial).subscribe(); 
  }

}
