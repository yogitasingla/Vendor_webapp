import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute,Router} from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  readonly phoneFormControl = new FormControl('', [
    Validators.required, Validators.pattern(("[6-9]\\d{9}"))
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router) { }
public phone_no;

    verify(){
      this.router.navigate(['/', 'otp']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    }

  ngOnInit() {
  }


}
