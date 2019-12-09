import {Component, Input, OnInit} from '@angular/core'
import {Product} from '../product-list/product-list.component'

@Component({
    selector: 'app-product-detail',
    template: `<div class="product-container"> 
    <h3>{{product.name}}</h3>
    only {{product.price}}</div>`,
    styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent implements OnInit {
    @Input() product: Product;
    ngOnInit(): void {
    }
}