import { HistoricoService } from './../historico.service';
import { Historico } from './../historico.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historico-read',
  templateUrl: './historico-read.component.html',
  styleUrls: ['./historico-read.component.css']
})
export class HistoricoReadComponent implements OnInit {
  historicos: Historico[] = []
  colunas = ['entrada', 'saida', 'permissao', 'capPlaca', 'acoes']

  constructor(private historicoService: HistoricoService, private router: Router) {

  }


  ngOnInit(): void {
    this.historicoService.read().subscribe(historicos => {
      this.historicos = historicos
      console.log(historicos)
    })
  }
  permitir(historicos: Historico): void {
    console.log("testando editar", historicos.permissao = 'permitido');
    this.historicoService.salvar = false;
    this.historicoService.historico = historicos;

  }
  negar(historicos: Historico): void {
    console.log("testando editar", historicos.permissao = 'negado');
    this.historicoService.salvar = false;
    this.historicoService.historico = historicos;
  }
}