import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FillAccountComponent, RefillMethodsComponent, RefillSumComponent} from '@app/features';
import {CardProcessComponent, CardRequirementsComponent} from '@app/ui';

@Component({
  selector: 'app-balance-refill',
  standalone: true,
  templateUrl: './balance-refill.component.html',
  styleUrl: './balance-refill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FillAccountComponent,
    RefillMethodsComponent,
    RefillSumComponent,
    CardProcessComponent,
    CardRequirementsComponent
  ]
})
export class BalanceRefillComponent {
}
