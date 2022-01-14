import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { FormValidComponent } from './form-valid/form-valid.component';
import { FormViewchildComponent } from './form-viewchild/form-viewchild.component';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    FormValidComponent,
    FormViewchildComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Event-Driven Form Template
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
