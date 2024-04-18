import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'lazy-load-feat';
  
  public isDarkMode: boolean = false;
  public lightModeIconUrl: string = 'https://cdn-icons-png.flaticon.com/512/2698/2698240.png';
  public darkModeIconUrl: string = 'https://cdn-icons-png.flaticon.com/512/3026/3026346.png';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode;
  }

  public toggleTheme(): void {
    this.isDarkMode = this.themeService.toggleTheme();
  }

}
