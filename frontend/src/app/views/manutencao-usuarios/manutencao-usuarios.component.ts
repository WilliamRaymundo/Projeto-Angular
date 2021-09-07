import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../componentes/usuarios/usuarios.service';

@Component({
  selector: 'app-manutencao-usuarios',
  templateUrl: './manutencao-usuarios.component.html',
  styleUrls: ['./manutencao-usuarios.component.css']
})
export class ManutencaoUsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
  }
  navegarUsuariosCreate(): void {
    this.usuariosService.salvar = true;
    this.router.navigate(['/usuarios/create'])
  }

}
