import { PhoneValidator } from './../validators/phone.validator';
import { Observable } from 'rxjs/Observable';
import { PasswordValidator } from './../validators/password.validator';
import { MatDialog, MatDialogRef, DateAdapter } from '@angular/material';
import { Component, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidationErrors } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^69+[0-9]{8}$/;
const EIGHTEEN_YEARS : number = 568024668000;

@Component({
    selector: 'sign-up',
    templateUrl: './signUp.template.html',
    styleUrls: [ './signUp.style.css' ]
  })
  export class SignUpComponent {
    constructor(private dateAdapter: DateAdapter<Date>, private dialog: MatDialog, private dialogRef: MatDialogRef<SignUpComponent>) {
      this.dateAdapter.setLocale('gr');
    }
    private startDate : Date = new Date(2000,0,1);
    @ViewChild('nameRegister') nameRegister : ElementRef;
    @ViewChild('surnameRegister') surnameRegister : ElementRef;
    @ViewChild('birthdayRegister') birthdayRegister : ElementRef;
    @ViewChild('phoneRegister') phoneRegister : ElementRef;
    @ViewChild('emailRegister') emailRegister : ElementRef;
    @ViewChild('passwordRegister') passwordRegister : ElementRef;
    @ViewChild('repasswordRegister') repasswordRegister : ElementRef;
    isLinear : boolean = true;
    minDate = new Date(1950, 0, 1);
    maxDate = new Date((Date.now() - EIGHTEEN_YEARS));
    terms : boolean = true;
    register = "Εγγραφή";

    nameFormControl = new FormControl('', [
      Validators.required]);

    surnameFormControl = new FormControl('', [
      Validators.required]);


    birthdayFormControl= new FormControl(new Date(""), [
      Validators.required]);

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX),
      Validators.email]);

    phoneFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(PHONE_REGEX),
      PhoneValidator.onlyNumber]);

    passwordFormControl = new FormControl('', [
      Validators.required, Validators.minLength(8),
      PasswordValidator.passwordValidation("")
    ]);

    repasswordFormControl = new FormControl('', [
      Validators.required, Validators.minLength(8),
      PasswordValidator.passwordValidation(this.passwordFormControl.value as string)]);


    stepOneFormControl = new FormGroup({
      nameFormControl : this.nameFormControl,
      surnameFormControl : this.surnameFormControl,
      birthdayFormControl: this.birthdayFormControl,
      phoneFormControl : this.phoneFormControl});

    stepTwoFormControl = new FormGroup({
      emailFormControl : this.emailFormControl,
      passwordFormControl : this.passwordFormControl,
      repasswordFormControl : this.repasswordFormControl});

    registerNewUser(){
      if(this.terms && this.stepTwoFormControl.valid && this.stepOneFormControl.valid){
        this.terms = false;
        return;
      }
      let name : string = this.nameRegister.nativeElement.value;
      let surname : string = this.surnameRegister.nativeElement.value;
      let birthday = this.birthdayRegister.nativeElement.value;;
      let phoneNumber = this.phoneRegister.nativeElement.value;
      let email = this.emailRegister.nativeElement.value;
      let password = this.passwordRegister.nativeElement.value;
      let repassword : string = this.repasswordRegister.nativeElement.value;
      this.dialog.closeAll();
    }

    acceptTerms(){
      this.terms = !this.terms;
    }
}
