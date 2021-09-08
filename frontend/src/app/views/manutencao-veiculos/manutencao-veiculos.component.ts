import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from '../../componentes/veiculos/veiculos.service';

@Component({
  selector: 'app-manutencao-veiculos',
  templateUrl: './manutencao-veiculos.component.html',
  styleUrls: ['./manutencao-veiculos.component.css']
})
export class ManutencaoVeiculosComponent implements OnInit {

  constructor(private veiculoService: VeiculoService,
    private router: Router) { }

  ngOnInit(): void {
  }
  navegarVeiculoCreate(): void {
    this.veiculoService.salvar = true;
    this.router.navigate(['/veiculos/create'])
  }

}
