import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = data;
      },
      error: error => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  editarUsuario(usuario: Usuario): void {
    this.router.navigate(['/formulario'], { queryParams: { id: usuario.id } });
  }

  eliminarUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe({
      next: () => {
        console.log(`Usuario con ID ${id} eliminado correctamente`);
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      },
      error: error => {
        console.error(`Error al eliminar usuario con ID ${id}:`, error);
      }
    });
  }
}
