import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
   
  constructor(private authService: AuthService, private router: Router, private alert : AlertService) {}

    logout() {
      this.authService.logout();
      this.alert.showAlert("Logout Successful!", "info")
      this.router.navigate(['/auth/login']);
    }

}
