import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShibaInuComponent } from './components/shibaInu/shibaInu.component';
import { ExampleComponent } from './components/example/example.component';
import { ListaSeriesComponent } from './components/listaSeries/listaSeries.component';
import { Tabla2Component } from './components/tabla2/tabla2.component';
import { HeaderComponent } from './components/header/header.component';
import { SerieComponent } from './components/serie/serie.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';

const routes: Routes = [
  { path: 'home', component: ListaSeriesComponent},
  { path: 'serie', component: SerieComponent},
  { path: 'facturacion', component: FacturacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ShibaInuComponent, ExampleComponent, ListaSeriesComponent, Tabla2Component, HeaderComponent, SerieComponent, FacturacionComponent]
