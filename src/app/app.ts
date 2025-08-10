import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { Footer } from './footer/footer';
import { RouterLink } from '@angular/router';
import { CartService } from './services/cart-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Footer, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  constructor (public cartService: CartService){}
}


