import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { EarthquakesListComponent } from './pages/earthquakes-list/earthquakes-list.component';
import { EarthquakesAddComponent } from './pages/earthquakes-add/earthquakes-add.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EarthquakesListComponent, EarthquakesAddComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule
  ]
})
export class ReportModule { }
