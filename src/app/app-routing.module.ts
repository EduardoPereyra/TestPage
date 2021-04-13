import { StringreverserComponent } from './stringreverser/stringreverser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    component: StringreverserComponent
  },
  {
    path: '',
    component: StringreverserComponent
  },
  {
    path: 'stringreverser',
    component: StringreverserComponent
  },
  {
    path: 'stringreverser/:word',
    component: StringreverserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
