import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { FormsModule } from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module'

import { RegisterModel } from '../models/register.model' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //this.user = new RegisterModel(name,email,password);
    this.registerForm = this.fb.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
  })
  }
  
  onRegisterSubmit() {
    console.log("call")
    alert(this.user.name +' ' + this.user.email+ '' +this.user.password)
  }
}
