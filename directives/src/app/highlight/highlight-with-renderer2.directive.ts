import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appHighlightWithRenderer2]',
})
export class HighlightWithRenderer2Directive implements OnInit {
  @Input() appHighlightDefaultBgColor: string = 'lightgreen';
  @Input() appHighlightTextColor: string = 'inherit';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   'lightgreen',
    // );
    this.backgroundColor = this.appHighlightDefaultBgColor;
    this.color = this.appHighlightTextColor;
  }
  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   'white',
    // );
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    this.backgroundColor = 'inherit';
    this.color = 'inherit';
  }
  @HostListener('mouseleave') moveAway(event: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   'lightgreen',
    // );
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'inherit');
    this.backgroundColor = this.appHighlightDefaultBgColor;
    this.color = this.appHighlightTextColor;
  }
}
