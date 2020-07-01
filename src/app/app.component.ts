import{ Component, OnInit} from '@angular/core';
import sampledata from './data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project2';
  itemlist: any =sampledata; 
  ngOnInit(){
    console.log(this.itemlist.date_list);
  }
}
  
  
 
   

  


