import { Component, Input, OnInit } from '@angular/core'
import { Product } from '../product-list/product-list.component'

@Component({
    selector: 'app-edit-product-detail',
    template: `<div class="green product-container">
    <h3>editing {{product.name}}</h3>
    <form>
        <div class="form-control">
            <label>name<input [(ngModel)]="product.name" name="name" /></label>
        </div>
        <div class="form-control">
            <label>price<input [(ngModel)]="product.price" name="price"/></label>
        </div>
        <button type="submit">save</button>
    </form>
    </div>`,
    styleUrls: ['./product-detail.css']
})
export class EditProductDetailComponent implements OnInit {
    @Input() product: Product;
    ngOnInit(): void {
    }
}
