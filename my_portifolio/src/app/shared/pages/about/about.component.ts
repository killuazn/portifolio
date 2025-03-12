// about.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Variável para controlar o idioma
  isPortuguese: boolean = true;

  // Função para alternar o idioma
  toggleLanguage(): void {
    this.isPortuguese = !this.isPortuguese;
  }
}
