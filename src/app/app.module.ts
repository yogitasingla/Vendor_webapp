import { BrowserModule } from '@angular/platform-browser';
import { MatVideoModule } from 'mat-video';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyComponent } from './verify/verify.component';
import{MatInputModule,MatCardModule,MatButtonModule,MatAutocompleteModule,MatSelectModule,MatRadioModule,
  MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatIconModule,MatToolbarModule,
  MatListModule,MatExpansionModule, MatMenuModule,MatDividerModule,MatStepperModule,MatTableModule,
  MatPaginatorModule,MatSortModule,MatDialogModule,MatSnackBarModule,MatGridListModule} from '@angular/material';
  import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';
  import {FormsModule} from "@angular/forms";
  import { NgOtpInputModule } from  'ng-otp-input';
  import { RouterModule, Routes } from '@angular/router';
  import{ReactiveFormsModule} from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { LocationComponent } from './location/location.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
    OtpComponent,
    LocationComponent,
    UploadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    NgOtpInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatRadioModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDividerModule,
    MatGridListModule,
    FormsModule,
    RouterModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdSAnHIs9l4jTCGgB0hPTKJqLMSzZODyE'
    }),
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
