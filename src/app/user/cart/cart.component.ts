import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { IBookInCart } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: IBookInCart[] | undefined;
  totalPrice: number = 0;

  constructor(private headerService: HeaderService,
    private contentService: ContentService,
    private router: Router) {
    this.headerService.setTitle('Cart');
    this.fetchCart();
  }

  ngOnInit(): void {
  }

  fetchCart() {
    this.contentService.loadCart().subscribe({
      next: cart => {
        this.items = cart;
        this.totalPrice = 0;
        this.items.forEach(item => this.totalPrice += item.price * item.quantity);
      },
      error: () => {
        this.router.navigate(['not-found']);
      }
    });
  }

  removeFromCart(id: number) {
    this.contentService.removeFromCart(id).subscribe(() => this.fetchCart());
  }

  emptyCart() {
    this.contentService.emptyCart().subscribe(() => this.fetchCart());
  }

  sendOrder() {
    this.contentService.sendOrder().subscribe(() => this.fetchCart());
  }
}
