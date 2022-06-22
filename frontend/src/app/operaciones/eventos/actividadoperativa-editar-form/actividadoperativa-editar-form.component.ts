import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';
import { Operacion } from '../../models/operacion';
import { EventoService } from '../../service/evento.service';
import { OperacionService } from '../../service/operacion.service';

@Component({
  selector: 'app-actividadoperativa-editar-form',
  templateUrl: './actividadoperativa-editar-form.component.html',
  styleUrls: ['./actividadoperativa-editar-form.component.css']
})
export class ActividadoperativaEditarFormComponent implements OnInit {

  actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();
  operaciones: Operacion[] = [];
  
  private host: string = environment.host;
  private urlEndPointAO: string = `${this.host}actividadesoperativas`

  constructor(private eventoService: EventoService,
              private operacionService: OperacionService, 
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    let id: string = this.cargarActividadOperativa();
    this.eventoService.getActividadOperativa(id).subscribe(res => 
      this.actividadoperativa = this.eventoService.mapearActividadesOperativas(res));
    setTimeout(() => {
      this.http.get<any>(`${this.urlEndPointAO}/${id}/operacion`).subscribe(res => this.actividadoperativa.operacion = this.operacionService.mapearOperacion(res).urlOperacion); }, 500);
    this.operacionService.getOperaciones().subscribe((response) => 
      this.operaciones = this.operacionService.extraerOperaciones(response));  
  }

  cargarActividadOperativa(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEditarActividadOperativa(): void {
    this.eventoService.updateActividadOperativa(this.actividadoperativa).subscribe(); 
  }

}
