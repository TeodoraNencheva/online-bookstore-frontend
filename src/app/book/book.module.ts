import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { CommonModule } from '@angular/common';
import { BookRouingModule } from './book-routing.module';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BookRouingModule
  ]
})
export class BookModule { }
