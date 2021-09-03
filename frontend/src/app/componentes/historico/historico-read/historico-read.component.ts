import { HistoricoService } from './../historico.service';
import { Historico } from './../historico.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-historico-read',
  templateUrl: './historico-read.component.html',
  styleUrls: ['./historico-read.component.css']
})
export class HistoricoReadComponent implements OnInit {
  historicos: Historico[] = []
  colunas = ['entrada', 'saida', 'permissao', 'capPlaca']

  constructor(private historicoService: HistoricoService) {
  }
  ngOnInit(): void {
    this.historicoService.read().subscribe(historicos => {
      this.historicos = historicos
      console.log(historicos)
    })
  }
}