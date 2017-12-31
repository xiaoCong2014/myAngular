import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[myHighLightDirective]'
})
export class MyHighLightDirective {

  constructor(private el: ElementRef) { }

  // #docregion defaultColor
  @Input('defaultColor') defaultColor: string;
  // #enddocregion defaultColor

  // #docregion color
  // @Input('appHighlight') highlightColor: string;

  @Input('highlightColor') highlightColor: string;
  @Input('highlightColor2') highlightColor2: string;

// @Style


  // #enddocregion color

  // #docregion mouse-enter
  @HostListener('mouseenter') onMouseEnter() {
    console.info("highlightColor " + this.highlightColor );
    // console.info("highlightColor2 " + this.highlightColor2 );


    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  // #enddocregion mouse-enter

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

    // console.info(this.el.nativeElement.innerHTML);
    this.el.nativeElement.innerHTML = '内部的innerHTML';
    // console.info('改动后');
    // console.info(this.el.nativeElement.innerHTML);

  }

}
