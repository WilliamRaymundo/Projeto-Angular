import { UsuariosService } from './../usuarios.service';
import { Usuarios } from './../usuarios.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-read',
  templateUrl: './usuarios-read.component.html',
  styleUrls: ['./usuarios-read.component.css']
})
export class UsuariosReadComponent implements OnInit {

  usuarios: Usuarios[] = []
  colunas = ['nome', 'cpf', 'endereco', 'telefone', 'acoes']

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.read().subscribe(usuarios => {
      this.usuarios = usuarios
      console.log(usuarios)
      })
  }

}
