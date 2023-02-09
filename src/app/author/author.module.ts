import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthorModule { }
