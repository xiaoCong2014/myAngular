import { Component, OnInit } from '@angular/core';

// import $ from "jquery";
import * as $ from 'jquery';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const devElement = document.querySelector('#div1');
    if (devElement !== null && devElement instanceof HTMLElement) {
      console.info (devElement );
    }else{
      console.info("为 null");
    }

    // $("#div1");

    // 对元素做操作
    // $("#div1").html("<p>this is a string from jQuery html setting</p>");

    // debugger


    // console.info($("FirstComponent ngOnInit"));
    //
    // console.info( $("#div1"));
    //
  }

}
