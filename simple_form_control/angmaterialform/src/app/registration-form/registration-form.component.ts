import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormsModule,NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

   
  regiForm: FormGroup;
  FirstName: String ='';
  LastName: String ='';
  Address: String ='';
  DOB: Date = null;
  Gender: String = '';
  // Blog: String = '';
  Email: String= '';
  password: String = '';
  // IsAccepted:number=0; 
  hide= true;

  constructor(private fb :FormBuilder,private ser:ServiceService,private router:Router) { 

    this.regiForm = fb.group({
      'FirstName':[null, Validators.required] ,
      'LastName':[null, Validators.required],
      'Address':[null, Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(100)])],
      'DOB':[null, Validators.required],
      'Gender':[null,  Validators.required],
      // 'Blog':[null, Validators.required],
      'Email':[null, Validators.compose([Validators.required,Validators.email])],
      'password':['', Validators.compose([Validators.required,Validators.minLength(6) ,Validators.maxLength(12)])],
      // 'IsAccepted':[null] 
    })
  }



  // onChange(event:any){
  //   if(event.checked == true) {
  //     this.IsAccepted = 1;
  //   }else {
  //     this.IsAccepted = 0;
  //   }
  // }
  
  onFormSubmit(form:NgForm) {
    
    console.log(form)

  }
  ngOnInit() {
  }
storedetails(a,b)
{
  console.log(a)
  this.ser.store(a,b);
  this.router.navigateByUrl('/login')
}
}
