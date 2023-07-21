import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './model/customer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http:HttpClient) { }

  getCustomers() {
    return this._http.get<Customer[]>(this.apiUrl).pipe(
      map((response:Customer[])=>{
        return response.map(customer=>customer)
      })
    );
  }

}


