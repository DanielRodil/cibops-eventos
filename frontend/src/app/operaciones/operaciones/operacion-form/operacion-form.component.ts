import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agente } from '../../models/agente';
import { Operacion } from '../../models/operacion';
import { OperacionImpl } from '../../models/operacion-impl';
import { AgenteService } from '../../service/agente.service';
import { OperacionService } from '../../service/operacion.service';

@Component({
  selector: 'app-operacion-form',
  templateUrl: './operacion-form.component.html',
  styleUrls: ['./operacion-form.component.css']
})
export class OperacionFormComponent implements OnInit {

  operacion: Operacion = new OperacionImpl ();
  agentes: Agente[] = [];

  constructor(private operacionService: OperacionService, 
              private router: Router,
              private agenteService: AgenteService) { }

  ngOnInit(): void {
    this.agenteService.getAgentes().subscribe((response) =>
    this.agentes = this.agenteService.extraerAgentes(response))
  }

  onAddOperacion(): void {
    this.operacionService.addOperacion(this.operacion).subscribe((response) => {
      this.router.navigate(['/operaciones']);
    });
  }

}
