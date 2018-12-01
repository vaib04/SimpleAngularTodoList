import { Count } from '../../model/count';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: Item[];
  count: Count;
  constructor() { }

  ngOnInit() {
    this.items = [
      new Item (
        'Do laundry',
        2,
        false
      ),
      new Item (
        'Call mom',
        5,
        true
      ),
      new Item (
        'Complete assignment',
        4,
        false
      ),
      new Item (
        'Meet friends',
        3,
        false
      )
    ];
    this.count = new Count(0,0);
    for(let x of this.items) {
        if(x.done) {
          this.count.totalDone++;
        } else {
          this.count.totalUndone++;
        }
    }
    this.count.total=this.count.totalUndone+this.count.totalDone;
  }

  priorityIncrease(item: Item) {
    if(item.priority<5) {
      item.priority++;
    }
  }
  priorityDecrease(item: Item) {
    if(item.priority>1) {
      item.priority--;
    }
  }
  toggleDone(item: Item) {
    if(item.done) {
      item.done=false;
      this.count.totalDone--;
      this.count.totalUndone++;
      this.count.total=this.count.totalUndone+this.count.totalDone;
    }
    else {
      item.done=true;
      this.count.totalDone++;
      this.count.totalUndone--;
      this.count.total=this.count.totalUndone+this.count.totalDone;
    }
  }

}