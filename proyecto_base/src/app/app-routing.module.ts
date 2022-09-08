import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicloDeVidaComponent } from './components/modulo_1/ciclo-de-vida/ciclo-de-vida.component';
import { ComponenteComponent } from './components/modulo_1/componente/componente.component';
import { RoutingComponent } from './components/modulo_1/routing/routing.component';
import { DirectivasComponent } from './components/modulo_2/directivas/directivas.component';
import { POOComponent } from './components/modulo_2/poo/poo.component';
import { TypescriptComponent } from './components/modulo_2/typescript/typescript.component';
import { DatabindingFormulariosComponent } from './components/modulo_3/databinding-formularios/databinding-formularios.component';
import { DecoradoresComunicacionComponent } from './components/modulo_3/decoradores-comunicacion/decoradores-comunicacion.component';
import { EventosComponent } from './components/modulo_3/eventos/eventos.component';
import { PipesComponent } from './components/modulo_3/pipes/pipes.component';
import { AngularMaterialComponent } from './components/modulo_4/angular-material/angular-material.component';
import { EjemploIComponent } from './components/modulo_4/ejemplo-i/ejemplo-i.component';
import { EjemploIIComponent } from './components/modulo_4/ejemplo-ii/ejemplo-ii.component';
import { EjemploIIIComponent } from './components/modulo_4/ejemplo-iii/ejemplo-iii.component';
import { ServiciosComponent } from './components/modulo_4/servicios/servicios.component';
import { ProyectoFinalComponent } from './components/proyecto-final/proyecto-final.component';

const routes: Routes = [
  {path: "home", component: RoutingComponent},
  {path: "componente", component: ComponenteComponent},
  {path: "ciclo-de-vida", component: CicloDeVidaComponent},
  {path: "poo", component: POOComponent},
  {path: "typescript", component: TypescriptComponent},
  {path: "directivas", component: DirectivasComponent},
  {path: "pipes", component: PipesComponent},
  {path: "eventos", component: EventosComponent},
  {path: "comunicacion", component: DecoradoresComunicacionComponent},
  {path: "formularios", component: DatabindingFormulariosComponent},
  {path: "servicios", component: ServiciosComponent},
  {path: "angular-material", component: AngularMaterialComponent},
  {path: "ejemplo-i", component: EjemploIComponent},
  {path: "ejemplo-ii", component: EjemploIIComponent},
  {path: "ejemplo-iii", component: EjemploIIIComponent},
  {path: "proyecto-final", component: ProyectoFinalComponent},
  {path: "**", component: RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
