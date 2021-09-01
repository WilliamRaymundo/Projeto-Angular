import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { ManutencaoUsuariosComponent } from './views/manutencao-usuarios/manutencao-usuarios.component';
import { ManutencaoVeiculosComponent } from './views/manutencao-veiculos/manutencao-veiculos.component';
import { ManutencaoHistoricosComponent } from './views/manutencao-historicos/manutencao-historicos.component';

import { UsuariosCreateComponent } from './componentes/usuarios/usuarios-create/usuarios-create.component';
import { VeiculosCreateComponent } from './componentes/veiculos/veiculos-create/veiculos-create.component';
const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "usuarios",
  component: ManutencaoUsuariosComponent
},
{
  path: "usuarios/create",
  component: UsuariosCreateComponent
},
{
  path: "veiculos",
  component: ManutencaoVeiculosComponent
},
{
  path: "veiculos/create",
  component: VeiculosCreateComponent
},
{
  path: "historicos",
  component: ManutencaoHistoricosComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }