import{FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StringreverserComponent } from './stringreverser/stringreverser.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WordslistService } from './stringreverser/service/wordslist.service';
import { DecimaltobinaryComponent } from './decimaltobinary/decimaltobinary.component';
@NgModule({
  declarations: [
    AppComponent,
    StringreverserComponent,
    DecimaltobinaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [WordslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
