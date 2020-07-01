import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{AppRoutingModule} from './app-routing.module';
import { DatafromurlComponent } from './datafromurl/datafromurl.component';
import{MyserviceService} from'./myservice.service' ;
import{HttpClientModule} from '@angular/common/http';
import { DatafromurlserviceComponent } from './datafromurlservice/datafromurlservice.component';

@NgModule({
  declarations: [
    AppComponent,
    DatafromurlComponent,
    DatafromurlserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
