import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  @ViewChild('f') signForm: NgForm | any;
  defaultSecret = "select";
  answer: string = "";
  genders = ["Male", "Female"];
  user = {
    userName: '',
    email: '',
    secret: '',
    secretAnswer: '',
    gender: ''
  }
  isSubmitted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSuggestionName() {
    const username = 'superuser';
    // this.signForm.setValue({
    //   userData: {
    //     userName: username,
    //     email: 'abc@test.com',
    //     secret: 'teacher',
    //     gender: 'Male',
    //     secretAnswar: 'Test Answar'
    //   }
    // });
    this.signForm.form.patchValue({
      userData: {
        userName: username
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.user.userName = this.signForm.value.userData.userName;
    this.user.email = this.signForm.value.userData.email;
    this.user.secret = this.signForm.value.userData.secret;
    this.user.secretAnswer = this.signForm.value.userData.secretAnswer;
    this.user.gender = this.signForm.value.userData.gender;

    this.signForm.reset();
  }

}
