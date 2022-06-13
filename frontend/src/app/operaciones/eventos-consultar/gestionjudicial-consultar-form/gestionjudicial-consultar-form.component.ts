import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionjudicialImpl } from '../../models/gestionjudicial-impl';
import { EventoService } from '../../service/evento.service';

@Component({
  selector: 'app-gestionjudicial-consultar-form',
  templateUrl: './gestionjudicial-consultar-form.component.html',
  styleUrls: ['./gestionjudicial-consultar-form.component.css']
})
export class GestionjudicialConsultarFormComponent implements OnInit {

  gestionjudicial: GestionjudicialImpl = new GestionjudicialImpl();

  constructor(private eventoService: EventoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarGestionJudicial();
    this.eventoService.getGestionJudicial(id).subscribe(response => 
      this.gestionjudicial = this.eventoService.mapearGestionesJudiciales(response));
  }

  cargarGestionJudicial(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
