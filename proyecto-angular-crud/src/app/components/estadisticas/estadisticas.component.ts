import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { EquipoService } from '../../services/equipo.service';
import { PartidoService } from '../../services/partido.service';
import { Partido } from '../../models/partido.model'; 


@Component({
  selector: 'app-estadisticas',
  standalone: true,
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})

export class EstadisticasComponent {
  constructor(private equipoService: EquipoService, private partidoService: PartidoService) {}

  ngOnInit(): void {
    this.partidoService.getPartidos().subscribe(partidos => {
      this.generarGrafico(partidos);
    });
  }

  generarGrafico(partidos: Partido[]): void {
    new Chart('graficoCanvas', {
      type: 'bar',
      data: {
        labels: partidos.map(partido => `${partido.equipo_local} vs ${partido.equipo_visitante}`),
        datasets: [{
          label: 'Goles Local',
          data: partidos.map(partido => partido.goles_local),
          backgroundColor: 'blue'
        },
        {
          label: 'Goles Visitante',
          data: partidos.map(partido => partido.goles_visitante),
          backgroundColor: 'red'
        }]
      }
    });
  }
}
