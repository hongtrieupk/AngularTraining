import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductOverview } from 'src/app/models/product-overview.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {

  constructor(private productService: ProductsService, private toastr: ToastrService) { }

  get productsInCart(): ProductOverview[] {
    return this.productService.getProductsInCart();
  }

  get totalMoney(): number {
    return this.productsInCart.map(item => item.price).reduce((prev, next) => prev + next);
  }

  checkout(): void {
    this.toastr.success('Your products have been successfully purchased. Thank you!');
    this.productService.clearProductCart();
  }
}
