import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-landing-safety',
  standalone: true,
  templateUrl: './landing-safety.component.html',
  styleUrl: './landing-safety.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSafetyComponent {
}
