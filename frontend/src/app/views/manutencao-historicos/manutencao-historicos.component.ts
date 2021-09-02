import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manutencao-historicos',
  templateUrl: './manutencao-historicos.component.html',
  styleUrls: ['./manutencao-historicos.component.css']
})
export class ManutencaoHistoricosComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  navegarHistoricoCreate(): void {
    this.router.navigate(['/historicos/create'])
  }
}