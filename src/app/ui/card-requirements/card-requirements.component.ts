import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-card-requirements',
  standalone: true,
  templateUrl: './card-requirements.component.html',
  styleUrl: './card-requirements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardRequirementsComponent {
}
