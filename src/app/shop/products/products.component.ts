import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepostory } from 'src/app/model/product.repostory';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private productRepostory:ProductRepostory){}
  get products():Product[]{
    return this.productRepostory.getProducts();
}

}

