import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoCards = [];
  inProgressCards = [];
  inRevisionCards = [];
  doneCards = [];
  newCard: string;

  constructor() {
  }

  ngOnInit(): void {
    this.newCard = '';
  }

  add(): void {
    if (this.newCard !== '') {
      this.todoCards.push(this.newCard);
      this.newCard = '';
    }
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
