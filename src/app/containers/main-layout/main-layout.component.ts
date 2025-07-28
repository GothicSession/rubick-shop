import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
}
