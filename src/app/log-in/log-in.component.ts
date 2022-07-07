import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  genders = ['male', 'female'];
  Register!: FormGroup;

  constructor() { }
  


  ngOnInit() {
    this.Register = new FormGroup({
      'username' : new FormControl('User',Validators.maxLength(20)),
      'email'    : new FormControl(null,[Validators.email, Validators.required]),
      'gender'   : new FormControl('male')

    });
  }
  onSubmit(){
    console.log(this.Register);
      
  }

}
