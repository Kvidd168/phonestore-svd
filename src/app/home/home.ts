import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../services/cart-service';
import { ProductService } from '../services/product-service';
declare const Swal:any;


@Component({
  selector: 'app-home',
  imports: [Carousel,ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor( 
    public cartService: CartService,
    public productService: ProductService
  ) {}

  addToCart(item:any): void{
    this.cartService.addToCart(item);

    const Toast = Swal.mixin({
      toast: true,
      width: 300,
      grow: 'row',
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "success",
      title: "Add To Cart Success"
    });
  }
}
