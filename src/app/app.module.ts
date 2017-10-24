import { SignUpComponent } from './signUpModal/signUp.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatStepperModule, MatDatepickerModule, MatCheckboxModule, MatNativeDateModule, MatInputModule } from '@angular/material'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, SignUpComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatDialogModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, MatCheckboxModule, BrowserAnimationsModule, MatInputModule
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent],
  exports : [MatButtonModule, MatDialogModule, MatStepperModule, MatDatepickerModule, MatCheckboxModule, MatNativeDateModule, MatInputModule],
  entryComponents : [SignUpComponent]
})
export class AppModule { }
