import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
