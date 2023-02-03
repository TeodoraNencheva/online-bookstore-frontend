import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
