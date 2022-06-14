import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActividadoperativaImpl } from '../../models/actividadoperativa-impl';
import { GestionjudicialImpl } from '../../models/gestionjudicial-impl';
import { EventoService } from '../../service/evento.service';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  actividadoperativa: ActividadoperativaImpl = new ActividadoperativaImpl();
  gestionjudicial: GestionjudicialImpl = new GestionjudicialImpl();
  formulario: number = 0;
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}operaciones`

  constructor(private eventoService: EventoService,
            private router: Router,
            private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.cargarOperacion();
    this.actividadoperativa.operacion = `${this.urlEndPoint}/${id}`;
    this.gestionjudicial.operacion = `${this.urlEndPoint}/${id}`;
  }

  onAddActividadOperativa(): void {
    this.eventoService.addActividadOperativa(this.actividadoperativa).subscribe();
    let id: string = this.cargarOperacion();
    this.router.navigate([`/operaciones/editar/${id}`]);
  }

  onAddGestionJudicial(): void {
    this.eventoService.addGestionJudicial(this.gestionjudicial).subscribe();
    let id: string = this.cargarOperacion();
    this.router.navigate([`/operaciones/editar/${id}`]);
  }

  cargarOperacion(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
