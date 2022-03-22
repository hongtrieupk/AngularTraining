import { Component, DoCheck, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOverview } from './models/product-overview.model';
import { RoutePathEnum } from './routes.enum';
import { BaseLoggerService } from './services/base-logger.service';
import { NavigationService } from './services/navigation.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements DoCheck {
  message: string = '';
  products: ProductOverview[] = [];
  constructor(private productService: ProductsService, private navigationService: NavigationService,
    private logService: BaseLoggerService) {
    this.products = this.productService.getProducts();
    this.logService.Info('hello from AppComponent');

    const obs = new Observable
  }
  ngDoCheck(): void {
    console.log('AppComponent check to run change detection');
    // this.products.push(new ProductOverview('', '', 0, ''));
  }

  addNew(): void {
    this.products = this.products.slice();
    this.products.push(new ProductOverview('999', 'Million', 999999, ''));
  }

  get isProductList(): boolean {
    return this.navigationService.getCurrentPath() === RoutePathEnum.ProductList;
  }

  get isCheckOutPage(): boolean {
    return this.navigationService.getCurrentPath() === RoutePathEnum.CheckOut;
  }

  get isCreatePage(): boolean {
    return this.navigationService.getCurrentPath() === RoutePathEnum.CreateProduct;
  }
}
