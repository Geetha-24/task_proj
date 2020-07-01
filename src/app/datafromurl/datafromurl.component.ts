import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-datafromurl',
  templateUrl: './datafromurl.component.html',
  styleUrls: ['./datafromurl.component.css']
})
export class DatafromurlComponent implements OnInit {
public httpdata;
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data)=>this.displaydata(data));
    
    //console.log(this.httpdata);
      }
      displaydata(data){this.httpdata=data;}
  }