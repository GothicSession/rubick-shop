import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CardComponent, InputComponent, PaymentCardComponent, PaymentCardsListComponent} from '@app/ui';

@Component({
  selector: 'app-refill-methods',
  standalone: true,
  templateUrl: './refill-methods.component.html',
  styleUrl: './refill-methods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    PaymentCardComponent,
    PaymentCardsListComponent
  ]
})
export class RefillMethodsComponent {
}
