import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, Inject, viewChild, viewChildren } from '@angular/core';
import { ScrollHandlerService } from '../../services/scroll-handler.service';

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
    this.scrollHandler.scroll$.subscribe((value) => {
      const titleRef = this.titleRef();
      if (!titleRef) return;
      const translateY = value.inPixels > window.innerHeight / 2 ? window.innerHeight / 2 : value.inPixels;
      titleRef.nativeElement.style.transform = `translateY(-${translateY}px)`;

      const spanRefs = this.spanRefs();
      console.log(value.inNumberOfScreens);

      if (!spanRefs) return;
      for (const spanRef of spanRefs) {
        spanRef.nativeElement.style.width = `${value.inNumberOfScreens < 0.4 ? 20 : 30}%`;
      }

    })
  }


}
