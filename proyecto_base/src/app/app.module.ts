import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './components/modulo_1/componente/componente.component';
import { CicloDeVidaComponent } from './components/modulo_1/ciclo-de-vida/ciclo-de-vida.component';
import { RoutingComponent } from './components/modulo_1/routing/routing.component';
import { POOComponent } from './components/modulo_2/poo/poo.component';
import { TypescriptComponent } from './components/modulo_2/typescript/typescript.component';
import { DirectivasComponent } from './components/modulo_2/directivas/directivas.component';
import { PipesComponent } from './components/modulo_3/pipes/pipes.component';
import { EventosComponent } from './components/modulo_3/eventos/eventos.component';
import { DecoradoresComunicacionComponent } from './components/modulo_3/decoradores-comunicacion/decoradores-comunicacion.component';
import { DatabindingFormulariosComponent } from './components/modulo_3/databinding-formularios/databinding-formularios.component';
import { ServiciosComponent } from './components/modulo_4/servicios/servicios.component';
import { AngularMaterialComponent } from './components/modulo_4/angular-material/angular-material.component';
import { EjemploIComponent } from './components/modulo_4/ejemplo-i/ejemplo-i.component';
import { EjemploIIComponent } from './components/modulo_4/ejemplo-ii/ejemplo-ii.component';
import { EjemploIIIComponent } from './components/modulo_4/ejemplo-iii/ejemplo-iii.component';
import { ProyectoFinalComponent } from './components/proyecto-final/proyecto-final.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    CicloDeVidaComponent,
    RoutingComponent,
    POOComponent,
    TypescriptComponent,
    DirectivasComponent,
    PipesComponent,
    EventosComponent,
    DecoradoresComunicacionComponent,
    DatabindingFormulariosComponent,
    ServiciosComponent,
    AngularMaterialComponent,
    EjemploIComponent,
    EjemploIIComponent,
    EjemploIIIComponent,
    ProyectoFinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
