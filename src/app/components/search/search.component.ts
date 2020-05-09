import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  
    
  }

  onSearch(breed: string) {    
    this.route.navigate(['/search',breed])
  }
}
