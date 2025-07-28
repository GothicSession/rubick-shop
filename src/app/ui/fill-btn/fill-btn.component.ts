import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-fill-btn',
  standalone: true,
  templateUrl: './fill-btn.component.html',
  styleUrl: './fill-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FillBtnComponent {
}
