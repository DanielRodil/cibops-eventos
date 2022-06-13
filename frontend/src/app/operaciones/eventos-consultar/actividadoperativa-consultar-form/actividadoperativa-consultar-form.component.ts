import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';
import { EventoService } from '../../service/evento.service';

@Component({
  selector: 'app-actividadoperativa-consultar-form',
  templateUrl: './actividadoperativa-consultar-form.component.html',
  styleUrls: ['./actividadoperativa-consultar-form.component.css']
})
export class ActividadoperativaConsultarFormComponent implements OnInit {

  actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();

  constructor(private eventoService: EventoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarActividadOperativa();
    this.eventoService.getActividadOperativa(id).subscribe(response => 
      this.actividadoperativa = this.eventoService.mapearActividadesOperativas(response));
  }
  

  cargarActividadOperativa(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
