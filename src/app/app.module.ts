import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReusableFormControlComponent } from './reusable-form-control/reusable-form-control.component'
import { TextFieldComponent } from './reusable-form-control/text-field/text-field.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'reusable-form-control', component: ReusableFormControlComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ReusableFormControlComponent,
    TextFieldComponent
    ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
