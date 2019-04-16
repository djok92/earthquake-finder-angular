import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {
  languages: string[] = [];
  currentLang: string;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.languages = this.translateService.langs;
    this.currentLang = this.translateService.getDefaultLang();
  }

  /**
   * Function for setting the language
   * @param language - Language selected in select
   */
  languageSelectionChange(language: any): void {
    this.translateService.use(language.target.value);
    this.translateService.setDefaultLang(language.target.value);
    this.currentLang = language.target.value;
  }
}
