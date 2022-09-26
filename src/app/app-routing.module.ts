import { ErrorComponent } from './pages/error/error.component';
import { SentencegeneratorComponent } from './pages/sentencegenerator/sentencegenerator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecimaltobinaryComponent } from './pages/decimaltobinary/decimaltobinary.component';
import { StringreverserComponent } from './pages/stringreverser/stringreverser.component';
import { MatrixmultiplicatorComponent } from './pages/matrixmultiplicator/matrixmultiplicator.component';
import {TodoComponent} from './pages/todo/todo.component';
import {QuizComponent} from './pages/quiz/quiz.component';

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
    path: 'sentencegenerator',
    component: SentencegeneratorComponent
  },
  {
    path: 'matrixmultiplicator',
    component: MatrixmultiplicatorComponent
  },
  {
    path: 'todoapp',
    component: TodoComponent
  },
  {
    path: 'quizapp',
    component: QuizComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
