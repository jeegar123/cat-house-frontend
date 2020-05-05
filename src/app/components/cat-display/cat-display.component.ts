import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/service/cat.service';

@Component({
  selector: 'app-cat-display',
  templateUrl: './cat-display.component.html',
  styleUrls: ['./cat-display.component.css']
})
export class CatDisplayComponent implements OnInit {
  cats:any[]=[]
  constructor(private catService:CatService) { }

  ngOnInit(): void {
    this.catService.getCats().subscribe(
      data=>{
      this.cats=data;
    });
  }

}
