import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoricoService } from '../../componentes/historico/historico.service';

@Component({
  selector: 'app-manutencao-historicos',
  templateUrl: './manutencao-historicos.component.html',
  styleUrls: ['./manutencao-historicos.component.css']
})
export class ManutencaoHistoricosComponent implements OnInit {
  constructor(private historicoService: HistoricoService,
    private router: Router) { }
  ngOnInit(): void {
  }
  navegarHistoricoCreate(): void {
    this.historicoService.salvar = true;
    this.router.navigate(['/historicos/create'])
  }
}