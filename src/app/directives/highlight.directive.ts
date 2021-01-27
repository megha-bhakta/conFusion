import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elref:ElementRef,
              private renderer:Renderer2) { }

              @HostListener('mouseenter') onMouseEnter() {
                this.renderer.addClass(this.elref.nativeElement, 'highlight');
              }

              @HostListener('mouseleave') onMouseLeave() {
                this.renderer.removeClass(this.elref.nativeElement, 'highlight');
              }

}
