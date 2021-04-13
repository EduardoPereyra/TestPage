import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecimaltobinaryComponent } from './pages/decimaltobinary/decimaltobinary.component';
import { StringreverserComponent } from './pages/stringreverser/stringreverser.component';

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
