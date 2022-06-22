import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AgenteImpl } from '../../models/agente-impl';
import { Operacion } from '../../models/operacion';
import { OperacionImpl } from '../../models/operacion-impl';
import { AgenteService } from '../../service/agente.service';
import { OperacionService } from '../../service/operacion.service';


@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  operacion: Operacion = new OperacionImpl();
  agente: AgenteImpl = new AgenteImpl();

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}operaciones`

  constructor(private agenteService: AgenteService,
              private operacionService: OperacionService, 
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    let id: string = this.cargarOperacion();
    this.operacionService.getOperacion(id).subscribe(response => 
      this.operacion = this.operacionService.mapearOperacion(response));
    setTimeout(() => {
      this.http.get<any>(`${this.urlEndPoint}/${id}/agente`).subscribe(res => this.agente.tip = this.agenteService.mapearAgente(res).tip); }, 500);
  }

  cargarOperacion(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
