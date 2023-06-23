import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CategoryRepostory } from "./category.repostory";
import { ProductRepostory } from "./product.repostory";
import { RestService } from "./rest.service";

@NgModule({
    imports:[HttpClientModule],
    providers:[CategoryRepostory, ProductRepostory, RestService]
})
export class ModelModule{}