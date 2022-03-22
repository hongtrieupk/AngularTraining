import { ProductOverview } from "../models/product-overview.model";


import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class ProductsService {
    private products: ProductOverview[];
    private productsInCart: ProductOverview[];
    unitId = 0;
    constructor() {
        this.unitId = Math.random();
        this.products = [
            new ProductOverview('1', 'Iphone 4', 7000000, 'assets/iphone-models/iphone4.jpg'),
            new ProductOverview('2', 'Iphone 5s', 8000000, 'assets/iphone-models/iphone5.jpg'),
            new ProductOverview('3', 'Iphone 6 Plus', 9000000, 'assets/iphone-models/iphone6.jpg'),
            new ProductOverview('4', 'Iphone 7 Plus Red', 10000000, 'assets/iphone-models/iphone7.jpg'),
            new ProductOverview('5', 'Iphone 8 Plus', 11000000, 'assets/iphone-models/iphone8.jpg'),
            new ProductOverview('6', 'Iphone X', 12000000, 'assets/iphone-models/iphone10.jpg'),
            new ProductOverview('7', 'Iphone 11', 20000000, 'assets/iphone-models/iphone11.jpg'),
            new ProductOverview('7', 'Iphone 12 Pro Max', 28000000, 'assets/iphone-models/iphone12.jpg'),
        ];
        this.productsInCart = [];
    }

    getProducts(): ProductOverview[] {
        return this.products;
    }

    getProductsInCart(): ProductOverview[] {
        return this.productsInCart;
    }

    getTotalOfProductsInCart(): number {
        return this.productsInCart.length;
    }

    addProductToCart(product: ProductOverview): void {
        if(this.productsInCart.find(x => x.id === product.id)) {
            return;
        }
        this.productsInCart.push(product);
    }

    addProduct(product: ProductOverview): void {
        this.products.push(product);
    }

    clearProductCart(): void {
        this.productsInCart = [];
    }
}