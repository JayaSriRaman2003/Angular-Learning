import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private alertService  : AlertService) {}

  login() {

    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin123';

    if (this.email === adminEmail && this.password === adminPassword) {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/admin-page']);
    } else {
      this.alertService.showAlert('Enter All The Fields', 'error')
    }
  }
}
