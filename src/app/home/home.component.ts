import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any;
  constructor(private productService: ProductsServiceService) {
    this.products = this.productService.products;
  }
}
