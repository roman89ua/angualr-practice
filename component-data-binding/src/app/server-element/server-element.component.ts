import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('serverElement') element: ServerElement;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('1. constructor'.toUpperCase());
  }

  ngOnInit() {
    console.log('3. onInit'.toUpperCase());
    console.log(
      '!!!!!!!!!!!!!!!!! @@@@HERE',
      this.paragraph.nativeElement.textContent ||
        'something else but not a textContent',
    );
  }

  ngDoCheck() {
    console.log('4. NG DO CHECK');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ON CHANGES');
    console.log('changes:', changes);
  }
  ngAfterContentInit() {
    console.log('5. ngAfterContentInit@@@@@@@@@@@@@@@@@@@'.toUpperCase());
    console.log(
      '!!!!!!!!!!!!!!!!! @@@@HERE',
      this.paragraph.nativeElement.textContent,
    );
  }
  ngAfterContentChecked() {
    console.log('6. AFTER CONTENT CHECKED---------');
  }

  ngAfterViewInit() {
    console.log('7. AFTER VIEW INIT********');
  }
  ngAfterViewChecked() {
    console.log('8. AFTER VIEW CHECKED---------');
  }
  ngOnDestroy() {}
}
