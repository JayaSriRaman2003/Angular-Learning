import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: string | null = null;
  type: 'success' | 'error' | 'info' = 'info';

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alert$.subscribe((alert) => {
      this.message = alert.message;
      this.type = alert.type;

      setTimeout(() => {
        this.message = null;
      }, 2000);
    });
  }

  }

