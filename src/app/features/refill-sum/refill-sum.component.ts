import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardComponent, InputComponent, SliderComponent } from '@app/ui';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClickOutsideDirective } from '@app/shared';

@Component({
  selector: 'app-refill-sum',
  standalone: true,
  templateUrl: './refill-sum.component.html',
  styleUrl: './refill-sum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    InputComponent,
    ReactiveFormsModule,
    SliderComponent,
    ClickOutsideDirective
  ]
})
export class RefillSumComponent {
  private readonly fb = inject(FormBuilder);

  protected refillGroup = this.fb.group({
    refillControl: this.fb.control<string>('162051', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  protected activeCurrency = 'RUB';
  protected currenciesList = ['RUB', 'USD', 'KZT', 'UAH'];
  protected isActivePopover = false;

  changePopoverActivity(): void {
    this.isActivePopover = !this.isActivePopover;
  }

  closePopover(): void {
    if (this.isActivePopover) {
      this.isActivePopover = false;
    }
  }

  changeCurrency(currency: string): void {
    this.activeCurrency = currency;
  }
}
