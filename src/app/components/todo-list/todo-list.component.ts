import { ListItemsService } from './../../services/list-items.service';
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
  constructor(private listItemsService: ListItemsService) { }

  ngOnInit() {
    this.items = this.listItemsService.getTodoItems();
    this.count = this.listItemsService.getCount();
  }

  

  priorityIncrease(item: Item) {
    this.listItemsService.priorityIncrease(item);
  }
  priorityDecrease(item: Item) {
    this.listItemsService.priorityDecrease(item);
  }
  toggleDone(item: Item) {
    this.listItemsService.toggleDone(item);
  }
  addItem(item: Item) {
    this.listItemsService.addItem(item);
  }
}
