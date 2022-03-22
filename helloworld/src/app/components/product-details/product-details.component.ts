import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ProductOverview } from 'src/app/models/product-overview.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements DoCheck{
  @Input() product: ProductOverview = new ProductOverview('', '', 0, '');
  @Output() addingProduct: EventEmitter<ProductOverview> = new EventEmitter<ProductOverview>();
  constructor() { }
  ngDoCheck(): void {
    console.log(`ProductDetailsComponent ${this.product.name} check to run change detection`);
  }

  addToCart(addedProduct: ProductOverview): void {
    this.addingProduct.emit(addedProduct);
  }
}
