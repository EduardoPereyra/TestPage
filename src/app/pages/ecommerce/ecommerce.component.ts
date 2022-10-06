import {Component, OnInit, ViewChild} from '@angular/core';
import {ShopCartComponent} from './shop-cart/shop-cart.component';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  @ViewChild(ShopCartComponent) shopCartComponent: ShopCartComponent;
  product: any;

  constructor() { }

  ngOnInit(): void {
    this.product = null;
  }

  selectProduct(event): void {
    this.product = event;
  }

  addingToCart(event): void {
    this.shopCartComponent.addProduct(event);
  }

}
