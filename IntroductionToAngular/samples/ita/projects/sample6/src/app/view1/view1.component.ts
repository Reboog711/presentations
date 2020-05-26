import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(public service: MyServiceService) { }

  ngOnInit() {
  }

}
