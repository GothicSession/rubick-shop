import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {PaymentCardComponent} from '../payment-card/payment-card.component';

@Component({
  selector: 'app-payment-cards-list',
  standalone: true,
  templateUrl: './payment-cards-list.component.html',
  styleUrl: './payment-cards-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaymentCardComponent
  ]
})
export class PaymentCardsListComponent {
  @Input()
  cardsListLength: number = 6;

  protected cardsList = new Array(this.cardsListLength);
}
