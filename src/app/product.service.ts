import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Product } from './product-list/product-list.component';
import MessageService from './message.service'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'apple', price: 0.5 },
    { id: 2, name: 'banana', price: 0.5 },
    { id: 3, name: 'clementine', price: 0.7 }
  ];

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(p: Product) {
    this.products.push(p)
    this.messageService.add(`new product added: ${p.name} at ${p.price}`);
  }
}