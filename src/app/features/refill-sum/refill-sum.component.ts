import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CardComponent} from '@app/ui';

@Component({
  selector: 'app-refill-sum',
  standalone: true,
  templateUrl: './refill-sum.component.html',
  styleUrl: './refill-sum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent
  ]
})
export class RefillSumComponent {
}
