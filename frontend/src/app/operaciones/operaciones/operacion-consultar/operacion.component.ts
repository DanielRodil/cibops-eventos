import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operacion } from '../../models/operacion';
import { OperacionImpl } from '../../models/operacion-impl';
import { OperacionService } from '../../service/operacion.service';


@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  operacion: Operacion = new OperacionImpl();

  constructor(private operacionService: OperacionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarOperacion();
    this.operacionService.getOperacion(id).subscribe(response => 
      this.operacion = this.operacionService.mapearOperacion(response));
  }

  cargarOperacion(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
