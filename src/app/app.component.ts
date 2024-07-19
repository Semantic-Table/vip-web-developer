import { Component, HostListener, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { ScrollHandlerService } from '../services/scroll-handler.service';
import { MenuComponent } from './menu/menu.component';
import { CreationComponent } from './creation/creation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroBannerComponent, MenuComponent, CreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vip-web-developer';

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.scrollHandler.scroll$.next({
      inPercentage: window.scrollY / (document.body.scrollHeight - window.innerHeight),
      inPixels: window.scrollY,
      inNumberOfScreens: window.scrollY / window.innerHeight
    })
  }

  constructor(
    @Inject(ScrollHandlerService) public scrollHandler: ScrollHandlerService
  ) { }
}
