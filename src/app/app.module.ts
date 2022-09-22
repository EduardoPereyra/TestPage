import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringreverserComponent } from './pages/stringreverser/stringreverser.component';
import { DecimaltobinaryComponent } from './pages/decimaltobinary/decimaltobinary.component';
import { WordslistService } from './pages/stringreverser/service/wordslist.service';
import { SentencegeneratorComponent } from './pages/sentencegenerator/sentencegenerator.component';
import { ErrorComponent } from './pages/error/error.component';
import { MatrixmultiplicatorComponent } from './pages/matrixmultiplicator/matrixmultiplicator.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { TodoComponent } from './pages/todo/todo.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

const components = [
  AppComponent,
  StringreverserComponent,
  DecimaltobinaryComponent,
  SentencegeneratorComponent,
  ErrorComponent,
  MatrixmultiplicatorComponent,
  NavbarComponent,
  CustomButtonComponent,
  TodoComponent
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  NgbModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatFormFieldModule
];
@NgModule({
  declarations: [...components],
  imports: [...modules, DragDropModule],
  providers: [WordslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
