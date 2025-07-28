import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-card-process',
  standalone: true,
  templateUrl: './card-process.component.html',
  styleUrl: './card-process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProcessComponent {
}
