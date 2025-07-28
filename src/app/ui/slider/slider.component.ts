import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  @Input()
  leftBorder = 50;

  @Input()
  rightBorder = 100000;
}
