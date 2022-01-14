import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-valid',
  templateUrl: './form-valid.component.html',
  styleUrls: ['./form-valid.component.css']
})
export class FormValidComponent implements OnInit {

  @ViewChild('f') signForm: NgForm | any;
  defaultSecret = "select";

  constructor() {
  }

  ngOnInit(): void {
  }

  onSuggestionName() {
    const username = 'superuser';
  }

  onSubmit() {
    console.log(this.signForm);
  }
}
