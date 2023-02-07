import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private contentService: ContentService,
    private headerService: HeaderService,
    private activatedRoute: ActivatedRoute) {
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

}
