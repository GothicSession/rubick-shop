import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-landing-refill',
  standalone: true,
  templateUrl: './landing-refill.component.html',
  styleUrl: './landing-refill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingRefillComponent {
}
