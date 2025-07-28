import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-balance-refill',
  standalone: true,
  templateUrl: './balance-refill.component.html',
  styleUrl: './balance-refill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceRefillComponent {
}
