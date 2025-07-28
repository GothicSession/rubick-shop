import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-landing-country',
  standalone: true,
  templateUrl: './landing-country.component.html',
  styleUrl: './landing-country.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingCountryComponent {
}
