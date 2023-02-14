import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IAddNewAuthor } from 'src/app/shared/interfaces/author';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  picture: File | undefined;

  constructor(private headerService: HeaderService,
    private contentService: ContentService,
    private router: Router) {
    this.headerService.setTitle('Add new author');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    let author: IAddNewAuthor = form.value;

    if (this.picture) {
      this.contentService.addNewAuthor(author, this.picture)
        .subscribe((author) => this.router.navigate(['/authors', author.id]));
    }
  }

  selectPicture(event: any) {
    this.picture = event.target.files[0];
  }

}
