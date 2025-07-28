import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FillAccountComponent, RefillMethodsComponent, RefillSumComponent} from '@app/features';

@Component({
  selector: 'app-balance-refill',
  standalone: true,
  templateUrl: './balance-refill.component.html',
  styleUrl: './balance-refill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FillAccountComponent,
    RefillMethodsComponent,
    RefillSumComponent
  ]
})
export class BalanceRefillComponent {
}
