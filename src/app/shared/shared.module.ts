import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';
import { AlertComponent } from '../components/alert/alert.component';
import { AddFormComponent } from '../components/add-form/add-form.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchFormComponent, AlertComponent, AddFormComponent, CardComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule, TranslateModule],
  exports: [
    HeaderComponent,
    RouterModule,
    FooterComponent,
    SearchFormComponent,
    AlertComponent,
    AddFormComponent,
    CardComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule
  ]
})
export class SharedModule {}
