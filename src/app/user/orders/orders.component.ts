import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IOrderOverview } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: IOrderOverview[] | undefined;

  constructor(private contentService: ContentService,
    private headerService: HeaderService) {
    this.headerService.setTitle('My orders');
    this.fetchOrders();
  }

  ngOnInit(): void {
  }

  fetchOrders() {
    this.contentService.loadLoggedUsersOrders().subscribe(
      orders => this.orders = orders
    )
  }

}
