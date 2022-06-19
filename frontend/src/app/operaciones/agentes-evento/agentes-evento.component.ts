import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenteImpl } from '../models/agente-impl';
import { AgenteService } from '../service/agente.service';

@Component({
  selector: 'app-agentes-evento',
  templateUrl: './agentes-evento.component.html',
  styleUrls: ['./agentes-evento.component.css']
})
export class AgentesEventoComponent implements OnInit {

  agentes: AgenteImpl[] = [];

  constructor(private agenteService: AgenteService,
              private activatedRoute: ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
    this.agenteService.getAgentesEvento(id).subscribe((res) => 
    this.agentes = this.agenteService.extraerAgentes(res));
  }

}
