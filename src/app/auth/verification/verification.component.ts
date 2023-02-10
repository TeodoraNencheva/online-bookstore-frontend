import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  success = false;

  constructor(private headerService: HeaderService,
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute) {
    this.headerService.setTitle('Confirm your registration')
    this.confirmRegistration();
  }

  ngOnInit(): void {
  }

  confirmRegistration() {
    const token = this.activatedRoute.snapshot.queryParams['token'];
    this.contentService.confirmRegistration(token).subscribe({
      next: () => this.success = true,
      error: () => this.success = false
    })
  }

}
