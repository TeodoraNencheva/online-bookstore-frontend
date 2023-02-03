import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.setPageTitle();
  }

  private setPageTitle(): void {
    const defaultPageTitle = 'Default Page Title';

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;

        if (!child) {
          return this.activatedRoute.snapshot.data['title'] || defaultPageTitle;
        }

        while (child.firstChild) {
          child = child.firstChild;
        }

        if (child.snapshot.data['title']) {
          return child.snapshot.data['title'] || defaultPageTitle;
        }
      })
    ).subscribe((title: string) => this.title = title);
  }
}
