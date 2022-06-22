import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Agente } from '../../models/agente';
import { Operacion } from '../../models/operacion';
import { OperacionImpl } from '../../models/operacion-impl';
import { AgenteService } from '../../service/agente.service';
import { OperacionService } from '../../service/operacion.service';


@Component({
  selector: 'app-operacioneditar',
  templateUrl: './operacioneditar.component.html',
  styleUrls: ['./operacioneditar.component.css']
})
export class OperacioneditarComponent implements OnInit {

  operacion: Operacion = new OperacionImpl();
  agentes: Agente[] = [];

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}operaciones`

  constructor(private operacionService: OperacionService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private agenteService: AgenteService,
              private http: HttpClient) { }

  ngOnInit(): void {
    let id: string = this.cargarOperacion();
    this.operacionService.getOperacion(id).subscribe(response => 
      this.operacion = this.operacionService.mapearOperacion(response));
    this.agenteService.getAgentes().subscribe((response) =>
      this.agentes = this.agenteService.extraerAgentes(response));
    setTimeout(() => {
      this.http.get<any>(`${this.urlEndPoint}/${id}/agente`).subscribe(res => this.operacion.agente = this.agenteService.mapearAgente(res).urlAgente); }, 500);
  }

  onEditarOperacion(): void {
    this.operacionService.updateOperacion(this.operacion).subscribe(); 
    this.router.navigate(['/operaciones']);
  }

  cargarOperacion(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEventoCrear(operacion: Operacion){
    this.verDatos(operacion);
    let url = `operaciones/editar/${operacion.operacionId}/formularioEvento`;
    this.router.navigate([url])
  }

  verDatos(operacion: Operacion): void {
    this.operacion = operacion;
  }

}