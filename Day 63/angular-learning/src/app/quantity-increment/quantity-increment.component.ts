import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {

  // msg:string|undefined;
  val:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  clicked(){
    // this.msg='Button is Clicked';
    // return this.msg;
    this.val += 1;
  }

  add(){
    this.val += 1;
  }
  sub(){
    this.val -= 1;
  }
}
