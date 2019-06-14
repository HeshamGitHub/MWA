import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';



@Component({
  selector: 'app-lazy-customer',
  template: `
    <div>
       shika wa7ed bas
        <div *ngFor="let c of (customers$ | async)">
            {{c.name}} {{c.email}}{{c.phone}}
        </div>
    </div>
  `,
  styles: []
})
export class LazyCustomerComponent implements OnInit {
  private customers$;
  constructor(private customerService:CustomerService) {
      this.customers$=this.customerService.getCachedData();
  }
  ngOnInit(){
  }

}
