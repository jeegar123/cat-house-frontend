import { CatService } from 'src/app/service/cat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/common/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  cat:Cat=new Cat();
  constructor(private route:ActivatedRoute,private cateService:CatService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.cateService.getCatById(params.id).subscribe(
          data=>{
            this.cat=data;
          }
        );
      }

    );
  }

}
