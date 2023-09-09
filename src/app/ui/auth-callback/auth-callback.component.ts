import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '@constants/app.constants';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css'],
})
export default class AuthCallbackComponent implements OnInit {
  @Input() error = '';
  @Input() error_description = '';

  router = inject(Router);

  ngOnInit() {
    if (!this.error) {
      return void this.router.navigateByUrl(`/${APP_ROUTES.HOME}`);
    }
    setTimeout(() => {
      this.router.navigateByUrl(`/`);
    }, 4000);
  }
}
