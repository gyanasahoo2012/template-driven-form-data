import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-viewchild',
  templateUrl: './form-viewchild.component.html',
  styleUrls: ['./form-viewchild.component.css']
})
export class FormViewchildComponent implements OnInit {

  @ViewChild('f') signForm : NgForm | any;

  constructor() { }

  ngOnInit(): void {
  }
  onSuggestionName(){
    const username = 'superuser';
  }

  onSubmit() {
    console.log(this.signForm);
  }
}
