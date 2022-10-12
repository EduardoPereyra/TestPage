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
  productFilteredList: any[];
  categories: any[];
  categorySelected: string;
  loading: boolean;

  constructor(private ecommerceService: FakeStoreService) {
  }

  ngOnInit(): void {
    this.productList = [];
    this.productFilteredList = [];
    this.categories = [];
    this.categorySelected = 'all';
    this.loading = true;
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.ecommerceService.getAllCategories().subscribe(
      data => {
        this.categories.push('all');
        this.categories.push(...data);
        this.loadProducts();
      }
    );
  }

  loadProducts(): void {
    if (this.productList.length < 150) {
      this.ecommerceService.getProducts().subscribe(
        data => {
          this.productList.push(...this.shuffle(data));
          this.productList.forEach(product => {
            if (Math.random() > .4) {
              product.addedprice = this.addedPrice(product.price);
            }
          });
          this.filter();
          /*          this.categories.push('all');
                    this.categories.push(...new Set(this.productList.map(item => item.category)));*/
          this.loading = false;
        }
      )
      ;
    }
  }

  filter(): void {
    if (this.categorySelected !== 'all') {
      this.productFilteredList = this.productList.filter(product => product.category === this.categorySelected);
    } else {
      this.productFilteredList = this.productList;
    }
  }

  addedPrice(price: number): string {
    return (price + (Math.random() * 50)).toFixed(2);
  }

  shuffle(array)
    :
    any[] {
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

  selectProduct(product)
    :
    void {
    this.selectedProduct.emit(product);
  }
}
