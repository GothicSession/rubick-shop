import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CardComponent, PaymentCardsListComponent} from '@app/ui';

@Component({
  selector: 'app-refill-methods',
  standalone: true,
  templateUrl: './refill-methods.component.html',
  styleUrl: './refill-methods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    PaymentCardsListComponent
  ]
})
export class RefillMethodsComponent {
}
