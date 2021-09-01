import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/template/header/header.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { MenuComponent } from './componentes/template/menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';

import { MatCardModule } from '@angular/material/card';
import { ManutencaoUsuariosComponent } from './views/manutencao-usuarios/manutencao-usuarios.component';
import { ManutencaoVeiculosComponent } from './views/manutencao-veiculos/manutencao-veiculos.component';
import { ManutencaoHistoricosComponent } from './views/manutencao-historicos/manutencao-historicos.component';
import { UsuariosCreateComponent } from './componentes/usuarios/usuarios-create/usuarios-create.component';
import { VeiculosCreateComponent } from './componentes/veiculos/veiculos-create/veiculos-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ManutencaoUsuariosComponent,
    ManutencaoVeiculosComponent,
    ManutencaoHistoricosComponent,
    UsuariosCreateComponent,
    VeiculosCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
