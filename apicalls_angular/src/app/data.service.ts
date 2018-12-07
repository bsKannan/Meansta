import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public fetch_id:number;

  constructor(private http:HttpClient) { }
 
  getUsers() {
    return this.http.get('http://localhost:3000/users')
    // return this.http.get('https://jsonplaceholder.typicode.com/users/')
  }

  getUser(userId) {
    return this.http.get('http://localhost:3000/users/',userId)
    // return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
