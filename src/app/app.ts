import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateDirective, TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('portfolio');

  private translate = inject(TranslateService);

    constructor() {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  switchLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
  }
}
