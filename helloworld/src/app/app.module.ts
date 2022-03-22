import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavigationService } from './services/navigation.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ProductsService } from './services/products.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { BaseLoggerService } from './services/base-logger.service';
import { environment } from '../environments/environment';
import { RealLoggerService } from './services/real-logger.service';
import { MockLoggerService } from './services/mock-logger.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateReactiveComponent } from './components/product-create-reactive/product-create-reactive.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'products/create', component: ProductCreateComponent }
];



const loggerServiceFactory = () => {
  if (environment.production) {
    return new RealLoggerService();
  }
  return new MockLoggerService();
};

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CheckOutComponent,
    ProductCreateComponent,
    ProductCreateReactiveComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  providers: [
    NavigationService,
    ProductsService,
    { provide: BaseLoggerService, useFactory: loggerServiceFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
