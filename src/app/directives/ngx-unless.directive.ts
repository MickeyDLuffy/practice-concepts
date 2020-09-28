import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNgxUnless]'
})
export class NgxUnlessDirective {

  constructor(public templateRef: TemplateRef<any>,
              public viewContainer: ViewContainerRef) { }
  buttonIsVisible = false;

   @Input()
   set appNgxUnless(condition: boolean){
      if (!condition && !this.buttonIsVisible) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.buttonIsVisible = true;
      } else if (this.buttonIsVisible) {
        this.viewContainer.clear();
        this.buttonIsVisible = false;
      }
   }
}
