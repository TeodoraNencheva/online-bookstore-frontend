import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/services/content.service';
import { IBookOverview } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: IBookOverview[] | undefined;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(size: number = 8, page: number = 0): void {
    this.books = undefined;
    this.contentService.loadBooks(size, page)
      .subscribe(books => this.books = books);
  }

}
