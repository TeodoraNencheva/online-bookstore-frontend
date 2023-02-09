import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IAuthorOverview } from 'src/app/shared/interfaces/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: IAuthorOverview[] | undefined;
  isFirst = false;
  isLast = false;
  size = 4;
  page = 0;

  constructor(private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
    this.activatedRoute.queryParams.subscribe(() => this.showAuthors());
    this.headerService.setTitle('Authors');
    this.fetchAuthors();
  }

  ngOnInit(): void {
  }

  showAuthors() {
    this.setProperties();
    this.fetchAuthors();
  }

  setProperties(): void {
    this.authors = undefined;
    this.size = this.activatedRoute.snapshot.queryParams['size'] || 4;
    this.page = this.activatedRoute.snapshot.queryParams['page'] || 0;
    this.isFirst = this.page == 0;
    this.checkIfLast();
  }

  fetchAuthors() {
    this.contentService.loadAuthors(this.size, this.page).subscribe(authors => this.authors = authors);
  }

  navigateToPrevious() {
    this.setProperties();

    this.router.navigate(
      ['/authors'],
      { queryParams: { size: this.size, page: this.page - 1 } }
    );

  }
  navigateToNext() {
    this.setProperties();

    this.router.navigate(
      ['/authors'],
      { queryParams: { size: this.size, page: Number(this.page) + 1 } }
    );

  }

  checkIfLast() {
    let currentCount = (Number(this.page) + 1) * Number(this.size);


    this.contentService.loadAuthorsCount()
      .subscribe(value => this.isLast = currentCount >= value);

  }

}
