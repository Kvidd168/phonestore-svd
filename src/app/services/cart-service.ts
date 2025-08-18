import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart_list: any[] = [];

  constructor() {
    this.cart_list = JSON.parse(localStorage.getItem('cart_list') ?? '[]');
  }

  getCartList(): any[] {
    return this.cart_list;
  }

  addToCart(item: any): void {
    let isExist:any = this.cart_list.find((x:any) => x.id === item.id);
    
    if(isExist)
    { 
      isExist.qty ++;
      let index:number = this.cart_list.indexOf(isExist);
      this.cart_list[index] = isExist;
    }
    else
    {
      item.qty = 1;
      this.cart_list.push(item);
    }
    localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
  }

  getTotalPrice(): number {
    return this.cart_list.reduce((total, item) => total + (item.price * item.qty), 0);
  }

  removeFromCart(item: any): void {
    this.cart_list = this.cart_list.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
  }

  decreaseQty(item: any): void {
    let isExist:any = this.cart_list.find((x:any) => x.id === item.id);
    if (isExist && isExist.qty > 1) {
      isExist.qty--;
      let index:number = this.cart_list.indexOf(isExist);
      this.cart_list[index] = isExist;
    }
    localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
  }

  increaseQty(item: any): void {
    let isExist:any = this.cart_list.find((x:any) => x.id === item.id);
    
    if(isExist)
    { 
      isExist.qty ++;
      let index:number = this.cart_list.indexOf(isExist);
      this.cart_list[index] = isExist;
    }
    else
    {
      this.cart_list.push(item);
    }
    localStorage.setItem('cart_list', JSON.stringify(this.cart_list));
  }

  clearCart(): void {
    this.cart_list = [];
    localStorage.removeItem('cart_list');
  }   

  Checkout():void{
    
  }

}
