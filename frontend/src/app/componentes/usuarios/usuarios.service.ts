import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Usuarios } from './usuarios.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost:3000/Usuarios"
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
  create(usuarios: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.url, usuarios)
  }
  read(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url);
  }
}