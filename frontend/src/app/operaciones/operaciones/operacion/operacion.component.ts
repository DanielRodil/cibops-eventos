import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../../models/operacion';
import { OperacionImpl } from '../../models/operacion-impl';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  @Input() operacion: Operacion = new OperacionImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
