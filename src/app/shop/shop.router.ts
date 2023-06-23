import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { HomeComponent } from "./home/home.component";
import { ProductsDetailsComponent } from "./products-details/products-details.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

const routes:Routes=[
    {path:'details/:producstsId', component:ProductsDetailsComponent},
    {path:'shop',
    component:HomeComponent,
    children:[
        {path:'', component:ProductsComponent},
    ]
},
{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent}

]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ShopRouter {}