import { Router } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios.model';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {

  usuarios: Usuarios = {
    nome: '', cpf: '', endereco: '', telefone: '',
  }
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  criarUsuarios(): void {
    this.usuariosService.create(this.usuarios).subscribe(() => {
      this.usuariosService.showMessage('Usuarios cadastrado com sucesso!')
      this.router.navigate(['/usuarios'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/usuarios'])
  }

}
