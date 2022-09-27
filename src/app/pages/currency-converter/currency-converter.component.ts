import { Component, OnInit } from '@angular/core';
import {CurrencyConverterService} from '../../service/currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  from: string;
  to: string;
  amount: number;
  symbols: any[];
  loading: boolean;
  converted: boolean;
  result: string;

  constructor(private currencyConverterService: CurrencyConverterService) { }

  ngOnInit(): void {
    this.loading = true;
    this.converted = false;
    this.to = '';
    this.from = '';
    this.amount = 0;
    this.symbols = [];
    this.getSymbols();
  }

  getSymbols(): void {
    this.currencyConverterService.getSymbols().subscribe(
      data => {
        this.symbols = [...Object.entries(data.symbols)];
        this.loading = false;
      }
    );
  }

  convert(): void {
    if (this.to !== '' && this.from !== '' && this.amount > 0) {
      this.loading = true;
      this.currencyConverterService
        .getConverter(this.to, this.from, this.amount)
        .subscribe(
          data => {
            console.log(data);
            this.result = data.result;
            this.converted = true;
            this.loading = false;
          }
        );
    }
  }

}
