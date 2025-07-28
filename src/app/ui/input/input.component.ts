import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
  signal,
  WritableSignal,
  effect, TemplateRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, ReactiveFormsModule, NgTemplateOutlet],
})
export class InputComponent implements ControlValueAccessor {
  @Input({ required: true }) title = '';
  @Input() placeholder = '';
  @Input()
  rightButton: TemplateRef<HTMLElement> | null = null;

  readonly value: WritableSignal<string> = signal('');
  readonly disabled = signal(false);

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  private bridge = effect(() => {
    this.onChange(this.value());
  });

  writeValue(val: string | null): void {
    this.value.set(val ?? '');
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  handleInput(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    this.value.set(value);
  }

  handleBlur(): void {
    this.onTouched();
  }
}
