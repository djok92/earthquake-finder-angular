import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarthquakesAddComponent } from './pages/earthquakes-add/earthquakes-add.component';
import { EarthquakesListComponent } from './pages/earthquakes-list/earthquakes-list.component';

const routes: Routes = [
  { path: 'add', component: EarthquakesAddComponent },
  { path: 'list', component: EarthquakesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
