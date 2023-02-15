import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  attemptFailed = false;

  constructor(private contentService: ContentService,
    private headerService: HeaderService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.headerService.setTitle('Login');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    const value: { username: string; password: string } = form.value;
    this.contentService.login(value).subscribe({
      next: response => {
        sessionStorage.setItem('jwt', response.token);
        sessionStorage.setItem('role', response.role);
        const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([returnUrl]);
      },
      error: () => {
        this.attemptFailed = true;
        form.reset();
      }
    })
  }

}
