import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ErrorInterceptor } from "./shop.error";

@NgModule({
    providers:[
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}
    ]
})
export class CoreModule{}