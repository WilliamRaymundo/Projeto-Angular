import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencao-veiculos',
  templateUrl: './manutencao-veiculos.component.html',
  styleUrls: ['./manutencao-veiculos.component.css']
})
export class ManutencaoVeiculosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegarVeiculoCreate(): void{
    this.router.navigate(['/veiculos/create'])
    }

}
