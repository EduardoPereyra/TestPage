import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FakeStoreService} from '../../../service/fake-store.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Output() selectedProduct = new EventEmitter<any>();
  productList: any[];
  loading: boolean;

  constructor(private ecommerceService: FakeStoreService) { }

  ngOnInit(): void {
    this.productList = [];
    this.loading = true;
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.productList.length < 150) {
      this.ecommerceService.getProducts().subscribe(
        data => {
          this.productList.push(...this.shuffle(data));
          console.log(this.productList);
          this.productList.forEach(product => {
            product.addedprice = this.addedPrice(product.price);
          });
          this.loading = false;
        }
      );
    }
  }

  addedPrice(price: number): string {
    return (price + (Math.random() * 50)).toFixed(2);
  }

  shuffle(array): any[] {
    let currentIndex = array.length;
    let randomIndex = 0;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  selectProduct(product): void {
    this.selectedProduct.emit(product);
  }
}
