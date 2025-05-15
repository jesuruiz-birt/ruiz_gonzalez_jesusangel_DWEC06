import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartidoService } from '../../services/partido.service';
import { EquipoService } from '../../services/equipo.service';
import { Partido } from '../../models/partido.model';
import { Equipo } from '../../models/equipo.model';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-agregar-partido',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './agregar-partido.component.html',
  styleUrls: ['agregar-partido.component.css']
})
export class AgregarPartidoComponent implements OnInit {
  equipos: Equipo[] = [];
  equipoLocal: string = '';
  equipoVisitante: string = '';
  golesLocal: number = 0;
  golesVisitante: number = 0;
  fecha: string = new Date().toISOString().split('T')[0]; 

  constructor(private partidoService: PartidoService, private equipoService: EquipoService, private router: Router) {}

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(equipos => this.equipos = equipos);
  }

  crearPartido(): void {
    const nuevoPartido: Partido = {
      id: '',
      equipo_local: this.equipoLocal,
      equipo_visitante: this.equipoVisitante,
      goles_local: this.golesLocal,
      goles_visitante: this.golesVisitante,
      fecha: this.fecha
    };

    this.partidoService.createPartido(nuevoPartido).subscribe(() => {
      this.router.navigate(['/partidos']);
    });
  }
}
