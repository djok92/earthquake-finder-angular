import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeContentComponent } from './components/home-content/home-content.component';

@NgModule({
  declarations: [HomeComponent, HomeContentComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
