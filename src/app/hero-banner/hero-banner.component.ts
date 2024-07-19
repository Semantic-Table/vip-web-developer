import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, HostListener, QueryList, signal, viewChild, viewChildren } from '@angular/core';
import gsap from 'gsap';

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
export class HeroBannerComponent implements AfterViewInit{
  MAX_TRANSLATE_X = 150;
  @HostListener('window:mousemove', ['$event']) mouseMoveHandler(event: MouseEvent) {
    const screenWidth = window.innerWidth;
    const xCenter = screenWidth / 2;
    const x = (event.clientX - xCenter) / xCenter;

    gsap.to('.center', {
      x: x * this.MAX_TRANSLATE_X,
      duration: 1
    })

    gsap.to('.first', {
      x: x * this.MAX_TRANSLATE_X / 2,
      duration: 1
    })
  }

  ngAfterViewInit(): void {
    // gsap.to('.title-text', {
    //   backgroundPosition: '50% 0%',
    // })
    gsap.to('.title', {
      y: 0,
      top: 0,
      duration: 1,
      position: 'fixed',
      scrollTrigger: {
        trigger: '.title',
        start: 'top 0px',
        end: 'top 20%',
        scrub: true,
        markers: true
      }
    })
  }
}


