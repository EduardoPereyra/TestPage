import { DecimaltobinaryComponent } from './decimaltobinary/decimaltobinary.component';
import { StringreverserComponent } from './stringreverser/stringreverser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  {
    path: 'decimaltobinary',
    component: DecimaltobinaryComponent
  },
  {
    path: '**',
    component: StringreverserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
