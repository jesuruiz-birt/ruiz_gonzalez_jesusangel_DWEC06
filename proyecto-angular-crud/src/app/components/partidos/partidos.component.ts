import { Component, OnInit, inject } from '@angular/core';
import { PartidoService } from '../../services/partido.service';
import { Partido } from '../../models/partido.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidos',
  standalone: false,
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})

export class PartidosComponent implements OnInit {

  partidos: Partido[] = [];

  constructor(private partidoService: PartidoService, private router: Router) {}

  ngOnInit(): void {
    this.partidoService.getPartidos().subscribe({
      next: (data) => {
        this.partidos = data;
      },
      error: (error) => {
        console.error('Error al obtener partidos:', error);
      }
    });
  }

  
  eliminarPartido(id: string): void {
    if (confirm("¿Seguro que quieres eliminar este partido?")) {
      this.partidoService.deletePartido(id).subscribe(() => {
        this.partidos = this.partidos.filter(p => p.id !== id);
      });
    }
  }
  
}
