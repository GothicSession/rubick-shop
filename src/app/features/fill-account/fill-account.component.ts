import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-balance-refill',
  standalone: true,
  templateUrl: './fill-account.component.html',
  styleUrl: './fill-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FillAccountComponent {
}
