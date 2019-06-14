import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  template: `
       <app-lazy-customer></app-lazy-customer>  
       <a [routerLink]="['CustomerLazy']">Load Customer Displayer (Lazy)</a>
  `,
  styles: ['']
})
export class AppComponent {
  constructor(private customerService:CustomerService){
      this.customerService.getOnlineData();
  }
}
