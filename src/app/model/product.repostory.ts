import { Injectable, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable()
export class ProductRepostory implements OnInit {
    private product: Product[] = [];
    constructor(private restService: RestService){
        this.restService.getProduct().subscribe(products => this.product = products);
    }
    ngOnInit() {
        
    }
    getProduct(id : number){
        return this.product.find(i => i.id === id);
    }
    getProducts():Product[]{
        return this.product;
    }
}