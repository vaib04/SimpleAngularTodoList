import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  newTask: Item;
  @Output() saveBtnClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.newTask =new Item(null,null,false);
  }
  saveBtnClickHandler() {
    this.newTask.priority = +this.newTask.priority;
    this.saveBtnClick.emit(this.newTask);
    this.newTask =new Item(null,null,false);
  }
}
