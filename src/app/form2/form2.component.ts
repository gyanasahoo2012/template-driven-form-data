import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSuggestionName(){
    const username = 'superuser';
  }

  onSubmit(formData: NgForm) {
    console.log(formData);
  }
}
