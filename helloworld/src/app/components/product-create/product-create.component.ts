import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ProductsService } from '../../services/products.service';
import { ProductOverview } from '../../models/product-overview.model';
import { NavigationService } from '../../services/navigation.service';
import { RoutePathEnum } from 'src/app/routes.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})

export class ProductCreateComponent {
  newProduct: ProductOverview =
    new ProductOverview('product 1', 'test', 0, 'img')
  @ViewChild('createProductForm')
  createProductForm: NgForm | undefined;

  constructor() { }

  onSubmit(): void {
    console.log(this.createProductForm?.value);
    // or using 2-way binding
    console.log(this.newProduct);
  }
}


// newProduct: ProductOverview = new ProductOverview('product 1', 'ttest', 0, 'img');

// onSubmit(): void {
//   // TODO: apply reactive / template driven form
//   // apply validation before submitting
//   console.log(this.newProduct);
//   this.newProduct.id = Math.random().toString();
//   this.productService.addProduct(this.newProduct);
//   this.toastr.success(`${this.newProduct.name} has been successfully added`);
//   // this.navigationService.setCurrentPath(RoutePathEnum.ProductList);
// }

// constructor(private productService: ProductsService,
//   private toastr: ToastrService,
//   private navigationService: NavigationService) { }
