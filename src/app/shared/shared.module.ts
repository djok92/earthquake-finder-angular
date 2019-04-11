import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, RouterModule, FooterComponent, SearchFormComponent, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class SharedModule { }
