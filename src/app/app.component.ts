import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application_Form';

  LogIn! : FormGroup

  ngOnInit() {
    this.LogIn = new FormGroup({
      'userID' : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      'password'    : new FormControl(null, [Validators.required, Validators.minLength(8)])

    });
  }
  onLogin(){
    console.log(this.LogIn);
  }
}
