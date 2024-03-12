import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'dodgerblue';
    this.element.nativeElement.style.color = 'white';
  }
}
