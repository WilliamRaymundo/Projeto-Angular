import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencao-usuarios',
  templateUrl: './manutencao-usuarios.component.html',
  styleUrls: ['./manutencao-usuarios.component.css']
})
export class ManutencaoUsuariosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegarUsuariosCreate(): void {
    this.router.navigate(['/usuarios/create'])
  }

}
