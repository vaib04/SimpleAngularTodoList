import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { Count } from '../model/count';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  private items: Item[];
  //private count: Count;
  private url = "http://localhost:3000/todos";

  constructor(private http : Http) { 
    console.log('list-items.service created');
    // this.items = [
    //   new Item (
    //     'Do laundry',
    //     2,
    //     false
    //   ),
    //   new Item (
    //     'Call mom',
    //     5,
    //     true
    //   ),
    //   new Item (
    //     'Complete assignment',
    //     4,
    //     false
    //   ),
    //   new Item (
    //     'Meet friends',
    //     3,
    //     false
    //   )
    // ];
    
  }

  getTodoItems() {
    return this.http.get(this.url);
  }

  // getCount() : Count {
  //   this.count = new Count(0,0);
  //   for(let x of this.items) {
  //       if(x.done) {
  //         this.count.totalDone++;
  //       } else {
  //         this.count.totalUndone++;
  //       }
  //   }
  //   this.count.total=this.count.totalUndone+this.count.totalDone;
  //   return this.count;
  // }

  priorityIncrease(item: Item) {
    if(item.priority<5) {
      item.priority++;
    }
    return this.http.put(this.url + '/' + item.id, item);
  }
  priorityDecrease(item: Item) {
    if(item.priority>1) {
      item.priority--;
    }
    return this.http.put(this.url + '/' + item.id, item);
  }
  toggleDone(item: Item) {
    if(item.done) {
      item.done=false;
      // this.count.totalDone--;
      // this.count.totalUndone++;
      // this.count.total=this.count.totalUndone+this.count.totalDone;
    }
    else {
      item.done=true;
      // this.count.totalDone++;
      // this.count.totalUndone--;
      // this.count.total=this.count.totalUndone+this.count.totalDone;
    }
    return this.http.put(this.url + '/' + item.id, item);
  }
  addItem(item: Item) {
    // if(item.done) {
    //   this.count.totalDone++;
    // } else  {
    //   this.count.totalUndone++;
    // }
    // this.count.total++;
    //this.items.unshift(item);
    return this.http.post(this.url,item);
  } 

}
