import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  userForm: FormGroup;
  tweetData: { title: string, imageUrl: string, description: string } | null = null;

  constructor(private fb: FormBuilder, private alertService : AlertService) {
    this.userForm = this.fb.group({
      title: ['', Validators.required],
      imageUrl: ['', [Validators.required]],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.userForm.invalid){
      // this.alertService.showAlert("Enter All The Fields", "error");
      alert("Enter All The Fields")
    }
    if (this.userForm.valid) {
      this.tweetData = this.userForm.value;
      this.userForm.reset();
    }
  }
}
