import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IAuthorListDTO } from 'src/app/shared/interfaces/author';
import { IAddNewBook } from 'src/app/shared/interfaces/book';
import { IGenre } from 'src/app/shared/interfaces/genre';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  authors: IAuthorListDTO[] | null = null;
  genres: IGenre[] | null = null;
  picture: File | undefined;

  constructor(private headerService: HeaderService,
    private contentService: ContentService,
    private router: Router) {
    this.headerService.setTitle('Add new book');
    this.contentService.loadAuthorsList().subscribe(authors => this.authors = authors);
    this.contentService.loadGenres().subscribe(genres => this.genres = genres);
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    let book: IAddNewBook = form.value;

    if (this.picture) {
      this.contentService.addNewBook(book, this.picture)
        .subscribe((book) => this.router.navigate(['/books', book.id, 'details']));
    }
  }

  selectPicture(event: any) {
    this.picture = event.target.files[0];
  }

}
