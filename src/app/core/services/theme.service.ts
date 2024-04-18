import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public isDarkMode: boolean = true;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, private sanitizer: DomSanitizer) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public toggleTheme(): boolean {
    this.changeStyleSheet();
    this.isDarkMode = !this.isDarkMode;
    return this.isDarkMode;
  }

  private changeStyleSheet(): void {
    let stlyeSheetToRemove = 'assets/styles/variables.css';
    let styleSheetToAdd = 'assets/styles/variables-dark.css';
    if (this.isDarkMode) {
      stlyeSheetToRemove = 'assets/styles/variables-dark.css';
      styleSheetToAdd = 'assets/styles/variables.css';
    }
    this.addNewSheet(styleSheetToAdd);
    this.removeOldSheet(stlyeSheetToRemove);
  }

  private addNewSheet(sheetUrl: string): void {
    const head = document.getElementsByTagName('head')[0];
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = sheetUrl;
    this.renderer.appendChild(head, link);
  }

  private removeOldSheet(sheetUrl: string): void {
    const styleUrl = sheetUrl;
    const links = document.querySelectorAll(`link[href="${styleUrl}"]`);
    links.forEach((link) => {
      this.renderer.removeChild(link.parentElement, link);
    });
  }
}
