import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SameValueDirective } from './directives/same-value.directive';
import { NotEmptyValueDirective } from './directives/not-empty-value.directive';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    SameValueDirective,
    NotEmptyValueDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SameValueDirective,
    NotEmptyValueDirective,
    LoaderComponent
  ]
})
export class SharedModule { }
