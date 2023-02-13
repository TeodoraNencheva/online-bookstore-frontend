import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IBookDetails } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: IBookDetails | undefined;
  bookAdded = false;
  get isLoggedIn() {
    return this.authService.isLogged;
  }

  constructor(private contentService: ContentService,
    private headerService: HeaderService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) {
    this.fetchBook();
    this.headerService.setTitle('Book details');
  }

  ngOnInit(): void {
  }

  fetchBook(): void {
    this.book = undefined;
    const id = this.activatedRoute.snapshot.params['bookId'];
    this.contentService.loadBook(id).subscribe(book => this.book = book);
  }

  decreaseQuantity(input: HTMLInputElement) {
    if (Number(input.value) > 1) {
      input.value = (Number(input.value) - 1).toString();
    }
  }

  increaseQuantity(input: HTMLInputElement) {
    input.value = (Number(input.value) + 1).toString();
  }

  addToCart(bookId: number | undefined, quantity: string) {
    if (bookId) {
      this.contentService.addToCart(bookId, Number(quantity)).subscribe(() => this.bookAdded = true);
    }
  }

  closeAlert() {
    this.bookAdded = false;
  }
}
