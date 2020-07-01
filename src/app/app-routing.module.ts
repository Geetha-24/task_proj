import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatafromurlserviceComponent } from './datafromurlservice/datafromurlservice.component';

const routes:Routes=[
  {path:'',redirectTo:'/datafromurlservice',pathMatch:'full'},
  {path:'datafromurlservice',component:DatafromurlserviceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }

