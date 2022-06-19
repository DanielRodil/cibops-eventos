import { Component, Input, OnInit } from '@angular/core';
import { Agente } from '../../models/agente';
import { AgenteImpl } from '../../models/agente-impl';

@Component({
  selector: 'app-agente-evento-item',
  templateUrl: './agente-evento-item.component.html',
  styleUrls: ['./agente-evento-item.component.css']
})
export class AgenteEventoItemComponent implements OnInit {

  @Input() agente: Agente = new AgenteImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
