import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { IBookOverview } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  books: IBookOverview[] | undefined;

  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(routeParams => this.fetchBooks(routeParams['genre']));
  }

  ngOnInit(): void {

  }

  fetchBooks(genre: string = '', size: number = 8, page: number = 0): void {
    this.books = undefined;

    if (genre) {
      this.contentService.loadBooksByGenre(genre, size, page)
        .subscribe(books => this.books = books);
    } else {
      this.contentService.loadAllBooks(size, page)
        .subscribe(books => this.books = books);
    }

  }

}
