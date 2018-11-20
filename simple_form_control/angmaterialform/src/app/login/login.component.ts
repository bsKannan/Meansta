import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormsModule,NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  regiForm: FormGroup;
  loginForm: FormGroup;
  Email: String = '';
  hide: true;

  constructor(private fb:FormBuilder, private serv:ServiceService, private router:Router) {

    this.regiForm = fb.group({
    'Email':[null, Validators.compose([Validators.required,Validators.email])],
    'password':['', Validators.compose([Validators.required,Validators.minLength(6) ,Validators.maxLength(12)])],
   })
  }
  onFormSubmit(form:NgForm) {
    
    console.log(form)

  }
 
  ngOnInit() {
  }
login(a,b) {
  console.log(this.serv.email)
if(a===this.serv.email&&b=== this.serv.password)
{
  console.log("true")
  this.router.navigateByUrl('/user')
}
else {
  console.log("false")
}
}


}
