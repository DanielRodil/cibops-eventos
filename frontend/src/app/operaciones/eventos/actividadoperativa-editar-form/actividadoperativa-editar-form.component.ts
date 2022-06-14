import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private eventoService: EventoService,
              private operacionService: OperacionService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarActividadOperativa();
    this.eventoService.getActividadOperativa(id).subscribe(res => 
      this.actividadoperativa = this.eventoService.mapearActividadesOperativas(res));
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
