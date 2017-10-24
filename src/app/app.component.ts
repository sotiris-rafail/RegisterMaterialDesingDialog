import { SignUpComponent } from './signUpModal/signUp.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(public dialog: MatDialog) {
  }

  ShowRegisterDialog(){
    if (this.dialog.afterOpen) {
      this.dialog.closeAll();
    }
    const dialogRefRegister = this.dialog.open(SignUpComponent);
    dialogRefRegister.afterClosed().subscribe(result => {});
  }
}
