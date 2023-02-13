import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IGenre } from 'src/app/shared/interfaces/genre';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  genres: IGenre[] | undefined;
  get isLoggedIn() {
    return this.authService.isLogged;
  }

  get isAdmin() {
    return this.authService.isAdmin;
  }

  constructor(private contentService: ContentService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchGenres();
  }

  fetchGenres(): void {
    this.genres = undefined;
    this.contentService.loadGenres()
      .subscribe(genres => this.genres = genres);
  }

  myAccFunc(demoAcc: HTMLElement) {
    if (demoAcc.className.indexOf("w3-show") == -1) {
      demoAcc.className += " w3-show";
    } else {
      demoAcc.className = demoAcc.className.replace(" w3-show", "");
    }
  }

  w3_open(mySidebar: HTMLElement, myOverlay: HTMLElement): void {
    mySidebar.style.display = "block";
    myOverlay.style.display = "block";
  }

  w3_close(mySidebar: HTMLElement, myOverlay: HTMLElement): void {
    mySidebar.style.display = "none";
    myOverlay.style.display = "none";
  }
}
