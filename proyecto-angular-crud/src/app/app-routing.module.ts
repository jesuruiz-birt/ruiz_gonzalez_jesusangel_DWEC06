import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './components/editar-equipo/editar-equipo.component';
import { AgregarPartidoComponent } from './components/agregar-partido/agregar-partido.component';
import { EditarPartidoComponent } from './components/editar-partido/editar-partido.component';

const routes: Routes = [
  { path: 'equipos', component: EquiposComponent },
  { path: 'crear-equipo', component: CrearEquipoComponent }, 
  { path: 'editar-equipo/:id', component: EditarEquipoComponent }, 
  { path: 'partidos', component: PartidosComponent },
  { path: 'agregar-partido', component: AgregarPartidoComponent },
  { path: 'editar-partido/:id', component: EditarPartidoComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: '', redirectTo: '/equipos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
