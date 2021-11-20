import { Product } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component } from "@angular/core";

@Component({
    templateUrl: "productTable.component.html"
})
export class ProductTablerComponent {
    constructor(private repository: ProductRepository) { }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}