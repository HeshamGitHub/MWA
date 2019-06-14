import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,from } from 'rxjs';
import { Customer } from './models/Customer';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customersObservable:Observable<Customer[]>;
  subscriber:Subscription;
  customers:Customer[];
  constructor(private httpClient:HttpClient) { 
    this.customersObservable = this.httpClient.get<Customer[]>("http://localhost:3000/customers");
  }
    counter:number=0;
    getOnlineData(){
     this.subscriber=this.customersObservable.subscribe(
       data=>{
        this.counter++;
        localStorage.setItem("customers",JSON.stringify(data))
        localStorage.setItem("counter",this.counter.toString());
      },
        err=>console.log(err),
       ()=>this.subscriber.unsubscribe());
      }

    getCachedData(){
       return from(JSON.parse(localStorage.getItem("customers")));
    }



}
