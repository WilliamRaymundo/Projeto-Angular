import { VeiculoService } from './../veiculos.service';
import { Veiculos } from './../veiculos.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-veiculos-read',
  templateUrl: './veiculos-read.component.html',
  styleUrls: ['./veiculos-read.component.css']
})
export class VeiculosReadComponent implements OnInit {
  veiculos: Veiculos[] = []
  colunas = [`placa`, `cor`, `acoes`]

  constructor(private VeiculoService: VeiculoService, private router: Router) { }

  ngOnInit(): void {
    this.VeiculoService.read().subscribe(veiculos => {
      this.veiculos = veiculos
      console.log(veiculos)
    })
  }
  editar(veiculos: Veiculos): void {
    console.log("testando editar", veiculos);
    this.VeiculoService.salvar = false;
    this.VeiculoService.veiculos = veiculos;
    this.router.navigate(['/veiculos/create'])
  }
  excluir(veiculos: Veiculos): void {
    console.log("testando excluir", veiculos);
  }
}
