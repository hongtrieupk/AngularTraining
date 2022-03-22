import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';
import { ProductOverview } from 'src/app/models/product-overview.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements DoCheck {
  @Input()
  products: ProductOverview[] = [];
  constructor(private productService: ProductsService) {
    this.products = this.productService.getProducts();
  }
  ngDoCheck(): void {
    console.log('ProductListComponent check to run change detection');
  }

  addProductToCart(product: ProductOverview): void {
    this.productService.addProductToCart(product);
  }

  increasePrice(): void {
    this.products.forEach(x => {
      x.price += 100;
    });
  }
}
