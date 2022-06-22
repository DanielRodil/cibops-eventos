import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';
import { OperacionImpl } from '../../models/operacion-impl';
import { EventoService } from '../../service/evento.service';
import { OperacionService } from '../../service/operacion.service';

@Component({
  selector: 'app-actividadoperativa-consultar-form',
  templateUrl: './actividadoperativa-consultar-form.component.html',
  styleUrls: ['./actividadoperativa-consultar-form.component.css']
})
export class ActividadoperativaConsultarFormComponent implements OnInit {

  actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();
  operacion: OperacionImpl = new OperacionImpl();

  private host: string = environment.host;
  private urlEndPointAO: string = `${this.host}actividadesoperativas`

  constructor(private eventoService: EventoService,
              private operacionService: OperacionService, 
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    let id: string = this.cargarActividadOperativa();
    this.eventoService.getActividadOperativa(id).subscribe(response => 
      this.actividadoperativa = this.eventoService.mapearActividadesOperativas(response));
    setTimeout(() => {
      this.http.get<any>(`${this.urlEndPointAO}/${id}/operacion`).subscribe(res => this.operacion.nombre = this.operacionService.mapearOperacion(res).nombre); }, 500);
  }
  
  cargarActividadOperativa(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
