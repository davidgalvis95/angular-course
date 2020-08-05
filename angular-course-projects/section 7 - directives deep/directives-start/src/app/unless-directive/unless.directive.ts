import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
// This is a property, but at the same time it has a setter that initializes the property that the directive will comply with
// As this is an structural directive we need to make sure that we bind it by property binding using the same name that the selector employees
//  @Input() set unless(condition:boolean){
  @Input() set appUnless(condition:boolean){
    if(!condition){
      // With the following code we create the view by creating the container, and adding the template to it
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      // If the condition is not met then we will not display anything of what is attached to the directive
      this.vcRef.clear();
    }

  }
// The template can be injected by adding TemplateRef
// The templateRef is the what we need to view if the condition is met, and the vcRef is the where do we want to see that, in a container
  constructor(private templateRef: TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
