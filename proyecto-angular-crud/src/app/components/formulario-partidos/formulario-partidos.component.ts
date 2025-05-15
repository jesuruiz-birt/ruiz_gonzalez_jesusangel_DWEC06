import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-partidos',
  standalone: false,
  templateUrl: './formulario-partidos.component.html',
  styleUrl: './formulario-partidos.component.css'
})
export class FormularioPartidosComponent {
  equipoLocal: string = '';
  equipoVisitante: string = '';
  golesLocal: number = 0;
  golesVisitante: number = 0;
  fecha: string = new Date().toISOString().slice(0, 10);
}

