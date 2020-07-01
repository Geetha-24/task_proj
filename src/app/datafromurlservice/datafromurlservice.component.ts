import { Component, OnInit } from '@angular/core';

import { MyserviceService } from '../myservice.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
@Component({
  selector: 'app-datafromurlservice',
  templateUrl: './datafromurlservice.component.html',
  styleUrls: ['./datafromurlservice.component.css']
})
export class DatafromurlserviceComponent implements OnInit {
public fulldata=[];
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.myservice.getData().subscribe((fdata) =>
    {this.fulldata = Array.from(Object.keys(fdata),key=>fdata[key]);
    console.log(this.fulldata);
  });
   
     
 
}

}
