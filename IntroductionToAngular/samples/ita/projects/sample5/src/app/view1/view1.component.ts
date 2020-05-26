import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  @Input()
  myValue = 'Hello';

  @Output()
  doSomethingRequest: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  doSomething() {
    console.log('View1 internal listener');
    this.doSomethingRequest.emit('do something');
  }


}
