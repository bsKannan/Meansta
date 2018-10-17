import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
result : any;
  constructor(private http: HttpClient) { }
  addCoin(name, price) {
    var url = 'http://localhost:4000/coins/add';
    var obj = {
      name: name,
      price: price
    };
    this
    .http
    .post(url, obj)
    .subscribe(res => console.log('Done')) ;
  }
  getCoins() {
    var url = 'http://localhost:4000/coins';
    return this
            .http
            .get(url)
            .pipe(map(res => {
              return res;
            }));
  }
  editCoin(id) {
    var url = 'http://localhost:4000/coins/edit/' + id;
    return this
    .http
    .get(url)
    .pipe(map(res => {
      return res;
    }));
  }

  // updateCoin(name, price, id) {
  //   var url = 'http://localhost:4000/coins/update/'+ id;

  //   var obj = {
  //     name:name,
  //     price:price
  //   };
  //   return this
  //   .http
  //   .post(url, obj)
  //   .subscribe(res => console.log('Done'));
  // }

  updateCoin(name, price, id) {
    const url = 'http://localhost:4000/coins/update/' + id;
    console.log("update")

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(url, obj)
      .subscribe(res => console.log('Done'));
  }


  
  deleteCoin(id) {
    var url = 'http://localhost:4000/coins/delete/'+id;
console.log("deteed")
    return this 
    .http
    .get(url)
    .pipe(map(res =>{
      return res;
    }));
  }
}
