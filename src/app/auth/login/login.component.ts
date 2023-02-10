import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { AuthService } from '../auth.service';

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
    private authService: AuthService) {
    this.headerService.setTitle('Login');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    const value: { username: string; password: string } = form.value;
    this.contentService.login(value).subscribe({
      next: response => {
        this.authService.isLogged = true;
        this.authService.jwt = response.token;
        console.log(response.token);
      },
      error: () => {
        this.attemptFailed = true;
        form.reset();
      }
    })
  }

}
