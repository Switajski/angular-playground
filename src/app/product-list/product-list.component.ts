import { Component } from '@angular/core';

interface Product { name: string, price?: number }

@Component({
  selector: 'app-product-list',
  template: `<h2>Products</h2>
  <ul>
    <li *ngFor="let product of products">{{product.name | uppercase}}, at {{product.price}}</li>
  </ul>
  <label>name:
    <input [(ngModel)]="product.name" placeholder="name"/>
  </label>
  <button (click)="addSome()" >add</button>`,
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'apple', price: 0.5 },
    { name: 'banana', price: 0.5 },
    { name: 'clementine', price: 0.7 }];
  product: Product = {name:''}

  addSome(){
    this.products.push(this.product)
  }
  addEdited(){
    this.products.push(this.product)
  }
}
