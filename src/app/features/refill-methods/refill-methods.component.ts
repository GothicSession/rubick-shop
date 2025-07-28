import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CardComponent} from '@app/ui';

@Component({
  selector: 'app-refill-methods',
  standalone: true,
  templateUrl: './refill-methods.component.html',
  styleUrl: './refill-methods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent
  ]
})
export class RefillMethodsComponent {
}
