import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CardComponent, InputComponent} from '@app/ui';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-fill-account',
  standalone: true,
  templateUrl: './fill-account.component.html',
  styleUrl: './fill-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    InputComponent,
    ReactiveFormsModule
  ]
})
export class FillAccountComponent {
  private readonly fb = inject(FormBuilder);
  protected  fillGroup = this.fb.group({
    fillControl: this.fb.control<string>('https://www.figma.com/proto/dsLSLxBMWjGQSuRMt...', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  })
}
