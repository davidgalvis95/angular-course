import {Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    // Here is the selector that will be used in the template
    selector: '[appBasicHighlight]'

})
// This is not a good practice NOT
export class BasicHighLightDirective implements OnInit {
    // In this directive we reference the element where the directive will be applied, as an ElementRef
    // So we can inject the element the directive will sit on, by using this reference to an element
    constructor(private elementRef:ElementRef){}
    // In the initialization of the component we can access the element the directive was placed on and overriding the style there
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}