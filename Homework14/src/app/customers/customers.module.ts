import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCustomerComponent } from './lazy-customer.component';

@NgModule({
  declarations: [LazyCustomerComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [LazyCustomerComponent]
})
export class CustomersModule { }
