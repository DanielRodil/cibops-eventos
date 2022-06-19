import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private operacionService: OperacionService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private agenteService: AgenteService) { }

  ngOnInit(): void {
    let id: string = this.cargarOperacion();
    this.operacionService.getOperacion(id).subscribe(response => 
      this.operacion = this.operacionService.mapearOperacion(response));
    this.agenteService.getAgentes().subscribe((response) =>
      this.agentes = this.agenteService.extraerAgentes(response));
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