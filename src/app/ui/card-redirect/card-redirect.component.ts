import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FillBtnComponent} from '../fill-btn/fill-btn.component';

@Component({
  selector: 'app-card-redirect',
  standalone: true,
  templateUrl: './card-redirect.component.html',
  styleUrl: './card-redirect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FillBtnComponent
  ]
})
export class CardRedirectComponent {
}
