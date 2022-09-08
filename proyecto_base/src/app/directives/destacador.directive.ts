import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Destacador]'
})
export class DestacadorDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
