import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-landing-commission',
  standalone: true,
  templateUrl: './landing-commission.component.html',
  styleUrl: './landing-commission.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingCommissionComponent {
}
