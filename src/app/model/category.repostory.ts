import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";

@Injectable()
export class CategoryRepostory implements OnInit{
    private category: Category[] = [];
    constructor(private restService:RestService){
        this.restService.getCategory().subscribe(category => this.category=category);
    }
 ngOnInit(){
    
 }
 getCategory(id:number){
    return this.category.find(i => i.id === id);
 }
 getCategories():Category[]{
    return this.category;
 }
}