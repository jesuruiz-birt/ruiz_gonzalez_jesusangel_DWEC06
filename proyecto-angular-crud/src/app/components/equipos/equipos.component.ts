import { Component, OnInit, inject } from '@angular/core';
import { EquipoService, Equipo } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  standalone: false,
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  private equipoService = inject(EquipoService);
  private router = inject(Router);

  equipos: Equipo[] = [];

ngOnInit(): void {
  this.equipoService.getEquipos().subscribe((data: Equipo[]) => {
    this.equipos = data;
    console.log(this.equipos);
  });
}

editarEquipo(equipo: Equipo): void {
  this.router.navigate(['/formulario-equipo'], { queryParams: { id: equipo.id } });
}

eliminarEquipo(id: string): void {
  this.equipoService.deleteEquipo(id).subscribe({
    next: () => {
      this.equipos = this.equipos.filter(equipo => equipo.id !== id);
      console.log(`Equipo con ID ${id} eliminado correctamente`);
    },
    error: error => console.error(`Error al eliminar equipo con ID ${id}:`, error)
  });
}

}
