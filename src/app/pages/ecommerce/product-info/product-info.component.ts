import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Output() selectedProduct = new EventEmitter<any>();
  @Output() addingToCart = new EventEmitter<any>();
  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(): void {
    this.selectedProduct.emit(null);
  }

  addToCart(): void {
    this.addingToCart.emit(this.product);
  }

}
