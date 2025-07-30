import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements AfterViewInit {
  @Input() leftBorder = 50;
  @Input() rightBorder = 100000;

  currentValue = Math.round((this.leftBorder + this.rightBorder) / 2);

  @ViewChild('lineCommon', {static: true})
  private lineCommon!: ElementRef<HTMLDivElement>;

  @ViewChild('lineActive', {static: true})
  private lineActive!: ElementRef<HTMLDivElement>;

  private isDragging = false;

  private fullWidth = 0;

  ngAfterViewInit(): void {
    this.fullWidth = this.lineCommon.nativeElement.clientWidth;
    const startWidth =
      ((this.currentValue - this.leftBorder) /
        (this.rightBorder - this.leftBorder)) *
      this.fullWidth;
    this.setActiveWidth(startWidth);
  }

  startDrag(event: MouseEvent): void {
    event.preventDefault();
    this.isDragging = true;
    this.onMouseMove(event);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }

    const lineRect = this.lineCommon.nativeElement.getBoundingClientRect();
    let newWidth = event.clientX - lineRect.left;

    newWidth = Math.max(0, Math.min(newWidth, this.fullWidth));

    this.setActiveWidth(newWidth);

    const percent = newWidth / this.fullWidth;
    const value =
      this.leftBorder + percent * (this.rightBorder - this.leftBorder);
    this.currentValue = Math.round(value);
  }

  @HostListener('document:mouseup')
  stopDrag(): void {
    this.isDragging = false;
  }

  private setActiveWidth(px: number): void {
    this.lineActive.nativeElement.style.width = `${px}px`;
  }
}
