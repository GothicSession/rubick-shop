import {Directive, ElementRef, EventEmitter, inject, NgZone, OnDestroy, Output} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective implements OnDestroy {
  @Output() appClickOutside = new EventEmitter<MouseEvent>();
  private host = inject(ElementRef<HTMLElement>);
  private zone = inject(NgZone);

  private readonly onDocClick = (event: MouseEvent) => {
    if (!this.host.nativeElement.contains(event.target)) {
      this.zone.run(() => this.appClickOutside.emit(event));
    }
  };

  constructor() {
    this.zone.runOutsideAngular(() =>
      document.addEventListener('click', this.onDocClick, true)
    );
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onDocClick, true);
  }
}
