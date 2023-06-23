import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ShopRouter } from "./shop.router";
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations:[ 
         CategoryComponent, 
         ProductsComponent, 
         HomeComponent, 
         ProductsDetailsComponent, 
         RegisterComponent, 
         LoginComponent
    ],
    imports:[
        ModelModule, 
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule,
        ShopRouter,
        RouterModule,
    ],
    exports:[
        CategoryComponent,
        ProductsComponent,
        HomeComponent,
        ProductsDetailsComponent,
        RegisterComponent
    ]
     
})
export class ShopModule{}