import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SameValueDirective } from './directives/same-value.directive';
import { NotEmptyValueDirective } from './directives/not-empty-value.directive';



@NgModule({
  declarations: [
    SameValueDirective,
    NotEmptyValueDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SameValueDirective,
    NotEmptyValueDirective
  ]
})
export class SharedModule { }
