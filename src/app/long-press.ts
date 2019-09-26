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
  @Output()
  onLongPress = new EventEmitter();

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    setTimeout(()=>{
      this.onLongPress.emit(event);
    }, 500);
  }
}
