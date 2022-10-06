import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  productList: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.productList = [];
  }

  addProduct(product: any): void {
    let pos = -1;
    this.productList.forEach((item, i) => {
      if (item.id === product.id) {
        pos = i;
      }
    });
    if (pos >= 0) {
      this.productList[pos].amount += 1;
    } else {
      product.amount = 1;
      this.productList.push(product);
    }
  }

  removeProduct(pos: number): void {
    this.productList.splice(pos, 1);
  }

  addItem(pos: number): void {
    this.productList[pos].amount += 1;
  }

  removeItem(pos: number): void {
    this.productList[pos].amount -= 1;
    if (this.productList[pos].amount === 0) {
      this.removeProduct(pos);
    }
  }
}
