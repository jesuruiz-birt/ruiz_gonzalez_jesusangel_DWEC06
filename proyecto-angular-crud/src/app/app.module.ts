import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormularioPartidosComponent } from './components/formulario-partidos/formulario-partidos.component';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './components/editar-equipo/editar-equipo.component';
import { AgregarPartidoComponent } from "./components/agregar-partido/agregar-partido.component";

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    PartidosComponent,
    FormularioPartidosComponent,
  ],
  imports: [
    BrowserModule,
    NavbarComponent,
    EstadisticasComponent,
    FormsModule,
    RouterModule.forRoot([
        { path: 'crear-equipo', component: CrearEquipoComponent },
        { path: 'editar-equipo/:id', component: EditarEquipoComponent },
    ]),
    CrearEquipoComponent,
    EditarEquipoComponent,
    AppRoutingModule,
    AgregarPartidoComponent
],
  providers: [provideHttpClient(withFetch()),],
  bootstrap: [AppComponent]
})
export class AppModule { }

