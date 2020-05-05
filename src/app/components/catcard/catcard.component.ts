import { Cat } from './../../common/cat';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.css']
})
export class CatcardComponent implements OnInit {

  @Input()cat:Cat


  constructor() { }

  ngOnInit(){

  }


}
