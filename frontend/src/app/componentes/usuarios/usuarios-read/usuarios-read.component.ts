import { UsuariosService } from './../usuarios.service';
import { Usuarios } from './../usuarios.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-read',
  templateUrl: './usuarios-read.component.html',
  styleUrls: ['./usuarios-read.component.css']
})
export class UsuariosReadComponent implements OnInit {

  usuarios: Usuarios[] = []
  colunas = ['nome', 'cpf', 'endereco', 'telefone', 'acoes']

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.usuariosService.read().subscribe(usuarios => {
      this.usuarios = usuarios
      console.log(usuarios)
    })
  }
  editar(usuarios: Usuarios): void {
    console.log("testando editar", usuarios);
    this.usuariosService.salvar = false;
    this.usuariosService.usuarios = usuarios;
    this.router.navigate(['/usuarios/create'])
  }
  excluir(usuarios: Usuarios): void {
    console.log("testando excluir", usuarios);
  }

}
