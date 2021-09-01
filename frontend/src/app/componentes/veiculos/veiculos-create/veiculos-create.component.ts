import { Router } from '@angular/router';
import { VeiculoService } from './../veiculos.service';
import { Component, OnInit } from '@angular/core';
import { Veiculos } from '../veiculos.model';

@Component({
  selector: 'app-veiculos-create',
  templateUrl: './veiculos-create.component.html',
  styleUrls: ['./veiculos-create.component.css']
})
export class VeiculosCreateComponent implements OnInit {
  veiculo: Veiculos = {
    placa: '', cor: '',
  }
  constructor(
    private veiculoService: VeiculoService ,
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  criarVeiculo(): void {
    this.veiculoService.create(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage('veiculo cadastrado com sucesso!')
      this.router.navigate(['/veiculos'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/veiculos'])
  }
}