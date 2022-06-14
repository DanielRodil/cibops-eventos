import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private eventoService: EventoService,
              private operacionService: OperacionService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarGestionJudicial();
    this.eventoService.getGestionJudicial(id).subscribe(res => 
      this.gestionjudicial = this.eventoService.mapearGestionesJudiciales(res));
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
