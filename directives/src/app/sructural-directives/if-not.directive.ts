import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  @Input() set appIfNot(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}
}
