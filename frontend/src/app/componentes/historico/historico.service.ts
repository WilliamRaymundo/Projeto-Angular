import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Historico } from './historico.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  url = "http://localhost:3000/historico"
  salvar = false;
  historico: Historico = {
    entrada: '',
    saida: '',
    permissao: '',
    capPlaca: '',
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
  create(historico: Historico): Observable<Historico> {
    return this.http.post<Historico>(this.url, historico)
  }
  read(): Observable<Historico[]> {
    return this.http.get<Historico[]>(this.url);
  }
  update(historico: Historico): Observable<Historico> {
    const urlAlterar = `${this.url}/${historico._id}`;
    return this.http.patch<Historico>(urlAlterar, historico)
    }
}