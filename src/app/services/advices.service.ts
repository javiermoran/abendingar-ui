import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AdvicesService {
  //url = "https://pure-wildwood-62378.herokuapp.com/advices";
  url = "http://localhost:3000/advices";

  constructor(private http:Http) { }

  getAll() {
    return this.http.get(this.url);
  }

}