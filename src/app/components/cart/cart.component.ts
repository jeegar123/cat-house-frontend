import { Cat } from 'src/app/common/cat';
import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cats:Cat[]=[];
  total:number=0;
  
  
  constructor(private service:CartService) { }

  ngOnInit(): void {
  this.cats=this.service.sharedItems.value.cat
      
    this.total=this.service.sharedTotal.value
  }

  removeValueFromCart(cat :Cat){
      this.service.remove(cat);
      this.cats=this.service.sharedItems.value.cat;
  }

}
