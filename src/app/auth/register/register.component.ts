import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IRegisterDTO } from 'src/app/shared/interfaces/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  attemptFailed = false;
  success = false;

  constructor(private headerService: HeaderService,
    private contentService: ContentService) {
    this.headerService.setTitle('Register');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, passwords: NgModelGroup) {
    if (form.invalid) { return; }

    let value: IRegisterDTO = form.value;
    value.password = passwords.value.password;
    value.confirmPassword = passwords.value.confirmPassword;
    value.baseUrl = environment.baseUrl;

    this.contentService.register(value).subscribe({
      next: () => this.success = true,
      error: () => {
        this.attemptFailed = true;
        form.reset();
      }
    })
  }

}
