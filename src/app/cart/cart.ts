import { Component} from '@angular/core';
import { CartService } from '../services/cart-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [ CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
