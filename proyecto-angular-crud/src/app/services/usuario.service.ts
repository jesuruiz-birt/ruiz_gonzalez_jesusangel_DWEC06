import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener usuarios:', error);
        return throwError(() => new Error('No se pudo obtener los usuarios'));
      })
    );
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error al obtener el usuario con ID ${id}:`, error);
        return throwError(() => new Error(`No se pudo obtener el usuario con ID ${id}`));
      })
    );
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario).pipe(
      catchError(error => {
        console.error('Error al crear usuario:', error);
        return throwError(() => new Error('No se pudo crear el usuario'));
      })
    );
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario).pipe(
      catchError(error => {
        console.error(`Error al actualizar el usuario con ID ${id}:`, error);
        return throwError(() => new Error(`No se pudo actualizar el usuario con ID ${id}`));
      })
    );
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error al eliminar el usuario con ID ${id}:`, error);
        return throwError(() => new Error(`No se pudo eliminar el usuario con ID ${id}`));
      })
    );
  }
}

