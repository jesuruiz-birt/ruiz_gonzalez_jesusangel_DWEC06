import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-equipo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent {
  nombreEquipo: string = '';
  paisEquipo: string = '';
  estadioEquipo: string = '';
  fundadoEquipo: string = new Date().getFullYear().toString(); 

  constructor(private equipoService: EquipoService, private router: Router) {}

  crearEquipo(): void {
    const formatoFecha = /^\d{4}\/\d{2}\/\d{2}$/; 
    
    if (!formatoFecha.test(this.fundadoEquipo)) {
      alert("La fecha debe estar en formato YYYY/MM/DD");
      return;
    }

    const nuevoEquipo: Equipo = {
      id: '',
      name: this.nombreEquipo,
      pais: this.paisEquipo,
      estadio: this.estadioEquipo,
      fundado: this.fundadoEquipo 
    };

    this.equipoService.createEquipo(nuevoEquipo).subscribe(() => {
      this.router.navigate(['/equipos']);
    });
  }
}
