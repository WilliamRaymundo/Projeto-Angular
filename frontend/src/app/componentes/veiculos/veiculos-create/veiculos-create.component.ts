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
    private veiculoService: VeiculoService,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.veiculoService.salvar) {
      this.veiculo = { placa: '', cor: '' }
    } else {
      this.veiculo = this.veiculoService.veiculos;
    }
  }
  criarVeiculo(): void {
    if (this.veiculoService.salvar) {
      console.log("valor da variável salvar: ", this.veiculoService.salvar)
      this.veiculoService.create(this.veiculo).subscribe(() => {
        this.veiculoService.showMessage('veiculos cadastrado com sucesso!')
        this.router.navigate(['/veiculos'])
      })
    } else {
      this.veiculoService.update(this.veiculo).subscribe(() => {
        this.veiculoService.showMessage('veiculos alterado com sucesso!')
        this.router.navigate(['/veiculos'])
      })
    }
  }
  cancelar(): void {
    this.router.navigate(['/veiculos'])
  }
}