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

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add To Cart Success",
      showConfirmButton: false,
      timer: 800
      
    });
  }
}
