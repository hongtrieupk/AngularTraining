import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ProductsService } from '../../services/products.service';
import { ProductOverview } from '../../models/product-overview.model';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

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

  constructor(private productService: ProductsService,
    private toastr: ToastrService,
    private router: Router) { }

  onSubmit(): void {
    // TODO: apply reactive / template driven form
    // apply validation before submitting
    console.log(this.newProduct);
    this.newProduct.id = Math.random().toString();
    this.productService.addProduct(this.newProduct);
    this.toastr.success(`${this.newProduct.name} has been successfully added`);
    this.router.navigateByUrl('products');
  }

  // constructor() { }

  // onSubmit(): void {
  //   console.log(this.createProductForm?.value);
  //   // or using 2-way binding
  //   console.log(this.newProduct);
  // }
}



