import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IAuthorDetails } from 'src/app/shared/interfaces/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: IAuthorDetails | undefined;

  constructor(private contentService: ContentService,
    private headerService: HeaderService,
    private activatedRoute: ActivatedRoute) {
    this.headerService.setTitle('Author details');
    this.fetchAuthor();
  }

  ngOnInit(): void {
  }

  fetchAuthor() {
    const authorId = this.activatedRoute.snapshot.params['authorId'];
    this.contentService.loadAuthorDetails(authorId).subscribe(author => this.author = author);
  }

}
