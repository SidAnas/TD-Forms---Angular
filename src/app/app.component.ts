import { Component, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  @ViewChild('f') signupForm: NgForm;

  defaultSelect = 'pet';
  Username = 'Siddique Anas Tahseen';
  userReply = '';
  genders = ['male', 'female'];

  user_data = {
    username: '',
    email: '',
    secret: '',
    gender: '',
    reply: ''
  };

  onSuggest(){
    this.signupForm.form.patchValue({
      userData: {
        username: 'SidAnas'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.user_data.username = this.signupForm.value.userData.username;
    this.user_data.email = this.signupForm.value.userData.email;
    this.user_data.secret = this.signupForm.value.secret;
    this.user_data.gender = this.signupForm.value.typeGender;
    this.user_data.reply = this.signupForm.value.reply;
    this.signupForm.reset();
  }
}
