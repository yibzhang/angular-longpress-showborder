import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[long-press]'
})
export class LongPress {
  private longPressTimeout: any;

  @Output()
  onLongPress = new EventEmitter();

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    this.longPressTimeout = setTimeout(()=>{
      this.onLongPress.emit(event);
    }, 500);
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  @HostListener('mouseleave')
  longPressInterupt(){
    clearTimeout(this.longPressTimeout);
  }
}
