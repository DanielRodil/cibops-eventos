import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Operacion } from '../../models/operacion';
import { OperacionImpl } from '../../models/operacion-impl';
import { OperacionService } from '../../service/operacion.service';


@Component({
  selector: 'app-operacioneditar',
  templateUrl: './operacioneditar.component.html',
  styleUrls: ['./operacioneditar.component.css']
})
export class OperacioneditarComponent implements OnInit {

  operacion: Operacion = new OperacionImpl();

  constructor(private operacionService: OperacionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarOperacion();
    this.operacionService.getOperacion(id).subscribe(response => 
      this.operacion = this.operacionService.mapearOperacion(response));
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