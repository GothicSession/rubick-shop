import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LandingCommissionComponent} from './landing-commission/landing-commission.component';
import {LandingRefillComponent} from './landing-refill/landing-refill.component';
import {LandingCountryComponent} from './landing-country/landing-country.component';
import {LandingSafetyComponent} from './landing-safety/landing-safety.component';

@Component({
  selector: 'app-landing-blocks',
  standalone: true,
  templateUrl: './landing-blocks.component.html',
  styleUrl: './landing-blocks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LandingCommissionComponent,
    LandingRefillComponent,
    LandingCountryComponent,
    LandingSafetyComponent
  ]
})
export class LandingBlocksComponent {
}
