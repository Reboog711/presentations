import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor(public service: MyServiceService) { }

  ngOnInit() {
  }

}
