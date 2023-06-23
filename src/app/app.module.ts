import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { NavbarComponent } from './shop/navbar/navbar.component';
import { AppRoutingModule } from 'src/app.routing.module';
import { CoreModule } from './shop/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {provide:"baseUrl", useValue:"http://localhost:3500/", multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
