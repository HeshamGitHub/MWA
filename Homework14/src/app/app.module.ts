import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { LazyCustomerComponent } from './customers/lazy-customer.component';


@NgModule({
  declarations: [
    AppComponent,LazyCustomerComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot([
        {path:'',component:AppComponent},
        {path:'CustomerLazy',component:LazyCustomerComponent}
    ])  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
