import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BookModule { }
