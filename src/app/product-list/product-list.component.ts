import { Component } from '@angular/core';

export interface Product {
  name: string;
  price?: number;
  id: number;
}

@Component({
  selector: 'app-product-list',
  template: `<h2>Products</h2>
  <div *ngFor="let product of products">
    <app-product-detail 
    [product]="product"
    (click)="onSelect(product)"
    *ngIf="!(editing && (product.id === editing.id))"
    ></app-product-detail>
    <app-edit-product-detail
    [product]="product"
    *ngIf="editing && (product.id === editing.id)"
    >
    </app-edit-product-detail>
  </div>
  <label>name:
    <input *ngIf="editing" [(ngModel)]="editing.name" placeholder="name"/>
  </label>
  <button (click)="addSome()" >add</button>`,
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'apple', price: 0.5 },
    { id: 2, name: 'banana', price: 0.5 },
    { id: 3, name: 'clementine', price: 0.7 }
  ];
  editing: Product;

  addSome() {
    this.products.push(this.editing)
  }
  onSelect(product: Product) {
    this.editing = product;
  }
}
