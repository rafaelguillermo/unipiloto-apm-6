import { Component } from '@angular/core';
import {ProductsService} from './service/products.service';
import  {Product} from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	title: string = "los productos del Año";

    selected: Product;

    products: Product[];

    constructor(private productService: ProductsService) {

    }

    getProducts() {
        this.productService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product) {
        this.selected = product;
    }
}
