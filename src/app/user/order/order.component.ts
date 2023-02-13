import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IOrderDetails } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: IOrderDetails | undefined;
  totalPrice = 0;

  constructor(private headerService: HeaderService,
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute) {
    this.headerService.setTitle('Order details');
    this.fetchOrderDetails();
  }

  ngOnInit(): void {
  }

  fetchOrderDetails() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contentService.loadOrderDetails(id).subscribe(order => {
      this.order = order;
      this.totalPrice = 0;
      order.items.forEach(item => {
        this.totalPrice += item.price * item.quantity;
      });
    });
  }


}
