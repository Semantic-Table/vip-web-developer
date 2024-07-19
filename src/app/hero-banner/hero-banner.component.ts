import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, HostListener, QueryList, signal, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBannerComponent {
  imagesCenter = viewChild<ElementRef<HTMLDivElement>>('imagesCenter');
  imagesFirstLayer = viewChildren<ElementRef<HTMLDivElement>>('imagesFirstLayer');

  mouseXPosition = 0
  @HostListener('window:mousemove', ['$event']) mouseMoveHandler(event: MouseEvent) {
    const screenWidth = window.innerWidth;
    const xCenter = screenWidth / 2;
    const x = (event.clientX - xCenter) / xCenter;

    this.mouseXPosition = x;
  }

  currentTransform = 0;

  MAX_TRANSLATE_X = 300;

  constructor() {
    this.animateImages();
  }

  lerp(a: number, b: number, t: number) {
    return a * (1 - t) + b * t;
  }

  animateImages() {
    requestAnimationFrame(this.animateImages.bind(this));

    this.currentTransform = this.lerp(this.currentTransform, this.mouseXPosition, 0.01);

    const imagesCenter = this.imagesCenter();
    if (!imagesCenter) return;
    const imagesFirstLayer = this.imagesFirstLayer();
    if (imagesFirstLayer.length === 0) return;
    if (imagesCenter && imagesFirstLayer.length > 0) {
      imagesCenter.nativeElement.style.transform = `translateX(${this.MAX_TRANSLATE_X * this.currentTransform}px)`
      for (const images of imagesFirstLayer) {
        images.nativeElement.style.transform = `translateX(${this.MAX_TRANSLATE_X * (this.currentTransform / 2)}px)`
      }
    }
  }
}


