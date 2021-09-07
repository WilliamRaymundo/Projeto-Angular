import { VeiculoService } from './../veiculos.service';
import { Veiculos } from './../veiculos.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-veiculos-read',
  templateUrl: './veiculos-read.component.html',
  styleUrls: ['./veiculos-read.component.css']
})
export class VeiculosReadComponent implements OnInit {
  veiculos: Veiculos[] = []
  colunas = [ `placa`,`cor`,`acoes`]

  constructor(private VeiculoService: VeiculoService) {
  }
  ngOnInit(): void {
    this.VeiculoService.read().subscribe(veiculos => {
      this.veiculos = veiculos
      console.log(veiculos)
    })
  }
}
