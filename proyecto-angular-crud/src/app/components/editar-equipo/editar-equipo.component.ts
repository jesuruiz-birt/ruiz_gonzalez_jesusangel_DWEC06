import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-equipo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.css']
})
export class EditarEquipoComponent implements OnInit {
  equipoId!: string;
  nombreEquipo: string = '';
  paisEquipo: string = '';
  estadioEquipo: string = '';
  fundadoEquipo: string = ''; 

  constructor(private route: ActivatedRoute, private equipoService: EquipoService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.equipoId = params['id'];

      this.equipoService.getEquipoById(this.equipoId).subscribe((equipo: Equipo) => {
        if (equipo) {
          this.nombreEquipo = equipo.name;
          this.paisEquipo = equipo.pais;
          this.estadioEquipo = equipo.estadio;
          this.fundadoEquipo = new Date(equipo.fundado).toISOString().split('T')[0].replace(/-/g, "/"); 
        }
      });
    });
  }

  actualizarEquipo(): void {
    const formatoFecha = /^\d{4}\/\d{2}\/\d{2}$/; 
    
    if (!formatoFecha.test(this.fundadoEquipo)) {
      alert("La fecha debe estar en formato YYYY/MM/DD");
      return;
    }

    const equipoActualizado: Equipo = {
      id: this.equipoId,
      name: this.nombreEquipo,
      pais: this.paisEquipo,
      estadio: this.estadioEquipo,
      fundado: this.fundadoEquipo 
    };

    this.equipoService.updateEquipo(this.equipoId, equipoActualizado).subscribe(() => {
      this.router.navigate(['/equipos']);
    });
  }
}
