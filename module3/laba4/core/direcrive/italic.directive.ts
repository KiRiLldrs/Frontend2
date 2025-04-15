import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[italic]'
})
export class ItalicDirective{
    constructor(private elmRef: ElementRef){
        this.elmRef.nativeElement.style.fontStyle = 'italic'
    }
}