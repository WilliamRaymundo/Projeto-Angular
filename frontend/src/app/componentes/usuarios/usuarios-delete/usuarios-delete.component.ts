import { Router } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios.model';
@Component({
  selector: 'app-usuarios-delete',
  templateUrl: './usuarios-delete.component.html',
  styleUrls: ['./usuarios-delete.component.css']
})
export class UsuariosDeleteComponent implements OnInit {
  usuarios: Usuarios = {
    nome: '', cpf: '', endereco: '', telefone: '',
  }
  constructor(
    private usuariosService: UsuariosService, private router: Router
  ) { }
  ngOnInit(): void {
    this.usuarios = this.usuariosService.usuarios;
  }
  delete(): void {
    this.usuariosService.delete(this.usuarios).subscribe(() => {
      this.usuariosService.showMessage('usuarios excluído com sucesso!')
      this.router.navigate(['/usuarios'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/usuarios'])
  }
}