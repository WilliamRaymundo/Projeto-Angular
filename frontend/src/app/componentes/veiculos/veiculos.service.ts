import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Veiculos } from './veiculos.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  url = "http://localhost:3000/veiculos"
  salvar = false;
  veiculos: Veiculos = {
    placa: '',
    cor: '',
  }
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }
  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }
  create(veiculo: Veiculos): Observable<Veiculos> {
    return this.http.post<Veiculos>(this.url, veiculo)
  }
  read(): Observable<Veiculos[]> {
    return this.http.get<Veiculos[]>(this.url);
  }
  update(veiculos: Veiculos): Observable<Veiculos> {
    const urlAlterar = `${this.url}/${veiculos._id}`;
    return this.http.patch<Veiculos>(urlAlterar, veiculos)
  }
}