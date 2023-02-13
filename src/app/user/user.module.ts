import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    CartComponent,
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DatePipe
  ]
})
export class UserModule { }
