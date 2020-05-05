import { map, tap, catchError } from 'rxjs/operators';
import { Cat } from './../common/cat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catUrl = "http://localhost:8080/cats";

  constructor(private http:HttpClient) { }


  getCats():Observable<Cat[]>{    
    return this.http.get<Cat[]>(this.catUrl);
  }

  getCatById(id:number):Observable<Cat>{
    return this.http.get<Cat>(this.catUrl+"/"+id)
    .pipe(
      tap(_ => console.log("done")
      )
    );
 
  }

}