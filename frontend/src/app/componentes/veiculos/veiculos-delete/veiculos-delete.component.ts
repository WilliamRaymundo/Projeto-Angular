import { Router } from '@angular/router';
import { VeiculoService } from './../veiculos.service';
import { Veiculos } from '../veiculos.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-veiculos-delete',
  templateUrl: './veiculos-delete.component.html',
  styleUrls: ['./veiculos-delete.component.css']
})
export class VeiculosDeleteComponent implements OnInit {
  veiculos: Veiculos = { placa: '', cor: '' }
  constructor(
    private veiculosService: VeiculoService, private router: Router
  ) { }
  ngOnInit(): void {
    this.veiculos = this.veiculosService.veiculos;
  }
  delete(): void {
    this.veiculosService.delete(this.veiculos).subscribe(() => {
      this.veiculosService.showMessage('Veiculos excluído com sucesso!')
      this.router.navigate(['/veiculos'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/veiculos'])
  }
}