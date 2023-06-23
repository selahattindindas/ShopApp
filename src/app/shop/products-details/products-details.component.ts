import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  products?:Product;
  constructor(private activated:ActivatedRoute, private restservices:RestService){}
  ngOnInit(): void {
    this.activated.params.subscribe(params => {
      this.restservices.getDetails(params["producstsId"]).subscribe(data => {
        this.products = data;
      })
    })
  }
  addTo($event: any){
    if($event.target.innerText = "Sepete Ekle"){
      $event.target.innerText = "Sepete Eklendi";
      $event.target.style
    }
  }
}
