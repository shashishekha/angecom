import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryComponent } from './category/category.component';
// import { ProductsComponent } from './products/products.component';
// import { CartComponent } from './cart/cart.component';
// import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent,
    // CartComponent,
    // CheckoutComponent
    routingComponents,
    WelcomeComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
