import { Router } from '@angular/router';
import { HistoricoService } from './../historico.service';
import { Component, OnInit } from '@angular/core';
import { Historico } from '../historico.model';
@Component({
  selector: 'app-historico-create',
  templateUrl: './historico-create.component.html',
  styleUrls: ['./historico-create.component.css']
})
export class HistoricoCreateComponent implements OnInit {
  historico: Historico = {
    entrada: '', saida: '', permissao: '',capPlaca: ''
  }
  constructor(
    private historicoService: HistoricoService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  criarHistorico(): void {
    this.historicoService.create(this.historico).subscribe(() => {
      this.historicoService.showMessage('historico cadastrado com sucesso!')
      this.router.navigate(['/historicos'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/historicos'])
  }
}