import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse,HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  constructor(private httpClient : HttpClient, private router :Router) { }


  uploadImage(data){
    const url = `http://localhost:3003/upload`;
    return this.httpClient.post(url, data).pipe(
    tap(result =>{})
  );
}


}
