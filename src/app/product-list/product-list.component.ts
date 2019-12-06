import { Component } from '@angular/core';

interface Product { name: string, price: number }

@Component({
  selector: 'app-product-list',
  template: `<h2>Products</h2>
  <ul>
    <li *ngFor="let product of products">{{product.name}}, at {{product.price}}</li>
  </ul>`,
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'apple', price: 0.5 },
    { name: 'banana', price: 0.5 },
    { name: 'clementine', price: 0.7 }];
}
