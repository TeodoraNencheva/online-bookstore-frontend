import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SameValueDirective } from './directives/same-value.directive';



@NgModule({
  declarations: [
    SameValueDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SameValueDirective
  ]
})
export class SharedModule { }
