import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-my-high-light-component',
  templateUrl: './my-high-light-component.component.html',
  styleUrls: ['./my-high-light-component.component.css']
})
export class MyHighLightComponentComponent implements OnInit {

  @Input('color') color: string;

  constructor() {
    this.color = 'yellow';
  }

  ngOnInit() {

  }

}
