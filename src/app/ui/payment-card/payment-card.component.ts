import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-payment-card',
  standalone: true,
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentCardComponent {
  @Input()
  cardTitleText: string = 'Lorum Ipsum';

  @Input()
  isActive = false;
}
