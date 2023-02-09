import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IBookOverview } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: IBookOverview[] | undefined;
  isFirst = false;
  isLast = false;
  genre = '';
  size = 8;
  page = 0;
  authorId: number | undefined = undefined;

  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {

    this.activatedRoute.params.subscribe(() => this.showBooks());
    this.activatedRoute.queryParams.subscribe(() => this.showBooks());

  }

  ngOnInit(): void { }

  showBooks() {
    this.setProperties();
    this.fetchBooks(this.genre, this.size, this.page, this.authorId);
  }

  setProperties(): void {
    this.books = undefined;
    this.genre = this.activatedRoute.snapshot.params['genre'];
    this.size = this.activatedRoute.snapshot.queryParams['size'] || 8;
    this.page = this.activatedRoute.snapshot.queryParams['page'] || 0;
    this.authorId = this.activatedRoute.snapshot.queryParams['authorId'] || undefined;
    this.isFirst = this.page == 0;
    this.checkIfLast(this.genre);

    if (this.genre) {
      this.headerService.setTitle(this.setPascalCaseTitle(this.genre));
    } else {
      this.headerService.setTitle('All books');
    }
  }

  fetchBooks(genre: string, size: number, page: number, authorId: number | undefined): void {
    if (genre) {
      this.contentService.loadBooksByGenre(genre, size, page)
        .subscribe(books => this.books = books);
    } else if (authorId) {
      this.contentService.loadBooksByAuthor(authorId)
        .subscribe({
          next: (books) => {
            this.books = books;
            this.isFirst = true;
            this.isLast = true;
            this.headerService.setTitle('All books by ' + this.books.at(0)?.author.fullName);
          },
          error: () => {
            this.headerService.setTitle('Author not found');
            this.router.navigate(['author-not-found']);
          }
        });
    }
    else {
      this.contentService.loadAllBooks(size, page)
        .subscribe(books => this.books = books);
    }
  }

  navigateToPrevious() {
    this.setProperties();

    if (this.genre) {
      this.router.navigate(
        ['/books', this.genre],
        { queryParams: { size: this.size, page: this.page - 1 } }
      );
    } else {
      this.router.navigate(
        ['/books'],
        { queryParams: { size: this.size, page: this.page - 1 } }
      );
    }
  }

  navigateToNext() {
    this.setProperties();

    if (this.genre) {
      this.router.navigate(
        ['/books', this.genre],
        { queryParams: { size: this.size, page: Number(this.page) + 1 } }
      );
    } else {
      this.router.navigate(
        ['/books'],
        { queryParams: { size: this.size, page: Number(this.page) + 1 } }
      );
    }
  }

  checkIfLast(genre: string) {
    let currentCount = (Number(this.page) + 1) * Number(this.size);

    if (genre) {
      this.contentService.loadBooksCountByGenre(genre)
        .subscribe(value => this.isLast = currentCount >= value);
    } else {
      this.contentService.loadAllBooksCount()
        .subscribe(value => this.isLast = currentCount >= value);
    }

  }

  setPascalCaseTitle(text: string): string {
    return text.replace(/\w+/g,
      function (w) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); });
  }
}
