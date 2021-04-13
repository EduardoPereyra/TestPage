import{FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StringreverserComponent } from './pages/stringreverser/stringreverser.component';
import { DecimaltobinaryComponent } from './pages/decimaltobinary/decimaltobinary.component';
import { WordslistService } from './pages/stringreverser/service/wordslist.service';
import { SentencegeneratorComponent } from './pages/sentencegenerator/sentencegenerator.component';
import { ErrorComponent } from './pages/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    StringreverserComponent,
    DecimaltobinaryComponent,
    SentencegeneratorComponent,
    ErrorComponent
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
