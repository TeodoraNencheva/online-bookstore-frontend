import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class BookModule { }
