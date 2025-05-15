import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidoService } from '../../services/partido.service';
import { EquipoService } from '../../services/equipo.service';
import { Partido } from '../../models/partido.model';
import { Equipo } from '../../models/equipo.model';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-partido',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-partido.component.html',
  styleUrls: ['editar-partido.component.css']
})
export class EditarPartidoComponent implements OnInit {
  equipos: Equipo[] = [];
  partidoId!: string;
  equipoLocal: string = '';
  equipoVisitante: string = '';
  golesLocal: number = 0;
  golesVisitante: number = 0;
  fecha: string = '';

  constructor(private route: ActivatedRoute, private partidoService: PartidoService, private equipoService: EquipoService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.partidoId = params['id'];

      this.partidoService.getPartidoById(this.partidoId).subscribe((partido: Partido) => {
        this.equipoLocal = partido.equipo_local;
        this.equipoVisitante = partido.equipo_visitante;
        this.golesLocal = partido.goles_local;
        this.golesVisitante = partido.goles_visitante;
        this.fecha = new Date(partido.fecha).toISOString().split('T')[0].replace(/-/g, "/");
      });
    });

    this.equipoService.getEquipos().subscribe(equipos => this.equipos = equipos);
  }

  actualizarPartido(): void {
    const partidoActualizado: Partido = {
      id: this.partidoId,
      equipo_local: this.equipoLocal,
      equipo_visitante: this.equipoVisitante,
      goles_local: this.golesLocal,
      goles_visitante: this.golesVisitante,
      fecha: this.fecha
    };

    this.partidoService.updatePartido(this.partidoId, partidoActualizado).subscribe(() => {
      this.router.navigate(['/partidos']);
    });
  }
}
