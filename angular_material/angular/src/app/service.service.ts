import { Injectable,OnInit,inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
public email:any;
public password:any;
  constructor() { }

  store(a,b)
  {
this.email=a;
this.password=b;
  }

  
}
