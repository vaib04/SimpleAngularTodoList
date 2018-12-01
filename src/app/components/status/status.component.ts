import { Count } from '../../model/count';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() count : Count;
  constructor() { }

  ngOnInit() {
  }

}
