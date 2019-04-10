import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchFormComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, RouterModule, FooterComponent, SearchFormComponent]
})
export class SharedModule { }
