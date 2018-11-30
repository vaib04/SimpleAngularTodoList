import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Item;
  @Output() onPriorityUp = new EventEmitter();
  @Output() onPriorityDown = new EventEmitter();
  @Output() onToggleDone = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  priorityIncreaseOnClick() {
    this.onPriorityUp.emit();
  }
  priorityDecreaseOnClick(){
    this.onPriorityDown.emit();
  }
  toggleDoneOnClick() {
    this.onToggleDone.emit();
  }
}
