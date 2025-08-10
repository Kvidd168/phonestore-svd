import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Aboutus } from './aboutus/aboutus';

export const routes: Routes = [
    {
        path:'',
        component: Home
    },

    {
        path:'aboutus',
        component: Aboutus
    },

    {
        path:'cart',
        component: Cart
    }
];
