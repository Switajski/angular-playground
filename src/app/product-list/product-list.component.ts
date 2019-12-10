import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

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
export class ProductListComponent implements OnInit {
  products: Product[];
  editing: Product;

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(p => this.products = p);
  }

  addSome() {
    this.productService.addProduct(this.editing);
  }

  onSelect(product: Product) {
    this.editing = product;
  }
}