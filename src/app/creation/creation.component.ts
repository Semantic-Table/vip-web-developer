import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationComponent { }
