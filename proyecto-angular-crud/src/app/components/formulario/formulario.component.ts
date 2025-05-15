/* 
import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  private usuarioService = inject(UsuarioService);

  usuario: Usuario = { id: 0, nombre: '', email: '' };

  private router = inject(Router);

  nombreEquipo: string = '';

guardarUsuario(): void {
  if (this.usuario.id) {
    this.usuarioService.updateUsuario(this.usuario.id, this.usuario).subscribe(() => {
      console.log('Usuario actualizado correctamente');
      this.router.navigate(['/lista']);
    });
  } else {
    this.usuarioService.createUsuario(this.usuario).subscribe(() => {
      console.log('Usuario guardado correctamente');
      this.router.navigate(['/lista']);
    });
  }
}
}
*/