import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/service/cat.service';

@Component({
  selector: 'app-cat-display',
  templateUrl: './cat-display.component.html',
  styleUrls: ['./cat-display.component.css']
})
export class CatDisplayComponent implements OnInit {
  cats: any[] = []
  searchWord: any;
  constructor(private catService: CatService, private route: ActivatedRoute,private ac:Router) {


  }

  ngOnInit(): void {
    
  
    if (this.route.snapshot.paramMap.has('breed') ) {

      this.searchWord=this.route.snapshot.paramMap.get('breed')
      this.catService.getCatByBreed(this.searchWord).subscribe(
        data => {
          this.cats = data;
        });
    } else {
      this.catService.getCats().subscribe(
        data => {
           this.cats = data;      
          
        })

    }    

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.    
 
  }


}


