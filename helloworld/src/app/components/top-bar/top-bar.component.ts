import { Component, ContentChild, DoCheck } from '@angular/core';
import { RoutePathEnum } from 'src/app/routes.enum';
import { NavigationService } from '../../services/navigation.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements DoCheck {

@ContentChild('myContent') myContent: any;

  routePathEnum = RoutePathEnum;
  constructor(private productService: ProductsService, private navigationService: NavigationService) { }

  ngDoCheck(): void {
    console.log('TopBarComponent check to run change detection');
  }

  get totalProductIncart(): number {
    return this.productService.getTotalOfProductsInCart();
  }


  goto(routPath: RoutePathEnum): void {
    console.log(this.myContent);
    // this.navigationService.setCurrentPath(routPath);
  }
}
