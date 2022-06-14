import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';
import { EventoService } from '../../service/evento.service';

@Component({
  selector: 'app-actividadoperativa-editar-form',
  templateUrl: './actividadoperativa-editar-form.component.html',
  styleUrls: ['./actividadoperativa-editar-form.component.css']
})
export class ActividadoperativaEditarFormComponent implements OnInit {

  actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();

  constructor(private eventoService: EventoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarActividadOperativa();
    this.eventoService.getActividadOperativa(id).subscribe(res => 
      this.actividadoperativa = this.mapearActividadesOperativas(res));
  }

  cargarActividadOperativa(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEditarActividadOperativa(): void {
    this.eventoService.updateActividadOperativa(this.actividadoperativa).subscribe(); 
  }

  mapearActividadesOperativas(actividadoperativaAPI: any): ActividadoperativaImpl {
    let actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();
    actividadoperativa.eventoId = this.eventoService.getId(actividadoperativaAPI._links.actividadoperativa.href);
    actividadoperativa.nombre = actividadoperativaAPI.nombre;
    actividadoperativa.descripcion = actividadoperativaAPI.descripcion;
    actividadoperativa.gastos = actividadoperativaAPI.gastos;
    return actividadoperativa;
  }

}
