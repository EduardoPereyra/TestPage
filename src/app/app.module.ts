import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StringreverserComponent} from './pages/stringreverser/stringreverser.component';
import {DecimaltobinaryComponent} from './pages/decimaltobinary/decimaltobinary.component';
import {WordslistService} from './pages/stringreverser/service/wordslist.service';
import {SentencegeneratorComponent} from './pages/sentencegenerator/sentencegenerator.component';
import {ErrorComponent} from './pages/error/error.component';
import {MatrixmultiplicatorComponent} from './pages/matrixmultiplicator/matrixmultiplicator.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {CustomButtonComponent} from './components/custom-button/custom-button.component';
import {TodoComponent} from './pages/todo/todo.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {QuizComponent} from './pages/quiz/quiz.component';
import {QuizService} from './service/quiz.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CurrencyConverterComponent} from './pages/currency-converter/currency-converter.component';
import {SpeedTypingTestComponent} from './pages/speed-typing-test/speed-typing-test.component';
import {SentenceGeneratorService} from './service/sentence-generator.service';
import {EcommerceComponent} from './pages/ecommerce/ecommerce.component';
import {ItemListComponent} from './pages/ecommerce/item-list/item-list.component';
import {ShopCartComponent} from './pages/ecommerce/shop-cart/shop-cart.component';
import {CardComponent} from './pages/ecommerce/card/card.component';
import { ProductInfoComponent } from './pages/ecommerce/product-info/product-info.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

const components = [
  AppComponent,
  StringreverserComponent,
  DecimaltobinaryComponent,
  SentencegeneratorComponent,
  ErrorComponent,
  MatrixmultiplicatorComponent,
  NavbarComponent,
  CustomButtonComponent,
  TodoComponent,
  QuizComponent,
  CurrencyConverterComponent,
  SpeedTypingTestComponent,
  EcommerceComponent,
  ItemListComponent,
  ShopCartComponent,
  CardComponent,
  ProductInfoComponent
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  NgbModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatFormFieldModule,
  DragDropModule,
  HttpClientModule,
  BrowserAnimationsModule,
  InfiniteScrollModule
];

const services = [
  WordslistService,
  SentenceGeneratorService,
  QuizService,
  HttpClient
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule {
}
