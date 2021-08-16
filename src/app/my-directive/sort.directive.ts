import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Sort } from './../sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() appSort:any[];

  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }

  @HostListener("click")
  sortData() {
      const sort = new Sort();
      const order = this.targetElement.nativeElement.getAttribute("name-order");
      const type = this.targetElement.nativeElement.getAttribute("name-type");
      const property = this.targetElement.nativeElement.getAttribute("data-name");
      if(order === "sort"){
            this.appSort.sort(sort.beginSort(property, order, type));
            this.targetElement.nativeElement.setAttribute("name-order", "back");
      }else{
            this.appSort.sort(sort.beginSort(property, order, type));
            this.targetElement.nativeElement.setAttribute("name-order", "sort");
      }
  }

}
