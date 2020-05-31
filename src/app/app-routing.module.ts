import { UploadComponent } from './upload/upload.component';

import { OtpComponent } from './otp/otp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VerifyComponent} from "./verify/verify.component";
import{LocationComponent}from "./location/location.component";

const routes: Routes = [
  {path: "verify", component: VerifyComponent },
  {path:"otp",component:OtpComponent},
  {path:"loc",component:LocationComponent},
  {path:"uploadData",component:UploadComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
