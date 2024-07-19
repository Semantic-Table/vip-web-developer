import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, Inject, viewChild, viewChildren } from '@angular/core';
import { ScrollHandlerService } from '../../services/scroll-handler.service';
import gsap from 'gsap';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {

  titleRef = viewChild<ElementRef<HTMLDivElement>>('title')
  spanRefs = viewChildren<ElementRef<HTMLDivElement>>('span')

  constructor(
    @Inject(ScrollHandlerService) public scrollHandler: ScrollHandlerService,
    @Inject(DestroyRef) public destroyRef: DestroyRef
  ) {
    gsap.to('.title', {
      y: 0,
      scrollTrigger: {
        trigger: '.title',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      },
    })
  }


}
