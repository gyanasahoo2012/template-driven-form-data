import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onSuggestionName(){
    const username = 'superuser';
  }

  onSubmit(formData: HTMLFormElement) {
    console.log("Submitted :"+formData);
  }
}
