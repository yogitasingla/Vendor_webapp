import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
yogi="yogita here";



 public  url;
 
 images;
 video;
 MultipleImages = [];
 
  onSelectFile(event) { // called each time file input changes
   
      if (event.target.files && event.target.files[0]) {
        const uploadedImage = event.target.files[0];
          this.images = uploadedImage;
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target.result;
          
        
        }
     }
     
}
 
  constructor(private http:HttpClient) { }

    onupload(){
      const formData = new FormData();
    formData.append('uploadedImage', this.images);
    this.http.post<any>('http://localhost:3003/upload', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
      console.log('uploads work',this.images);
    }



    urls = new Array<string>();

    selectMultipleImage(event) {
      this.urls = [];
      let multipleImages = event.target.files;
      if (multipleImages) {
        this.MultipleImages = event.target.files;
        for (let file of multipleImages) {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls.push(e.target.result);
          }
          reader.readAsDataURL(file);
        }
      }
    }
  ngOnInit() {}

  onselectVideo(event){
    if(event.target.files && event.target.files[0]){
      const uploadedImage = event.target.files[0];
      this.video = uploadedImage;
      var reader = new FileReader();
  
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        
      
      }
    }
   
  }
  onSubmitVideo(){
     const formData = new FormData();
    formData.append('uploadedImage', this.video);
    this.http.post<any>('http://localhost:3003/upload', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
      console.log('uploads work',this.video);
    } 
  
  onMultipleSubmit(){
    const formData = new FormData();
    for(let img of this.MultipleImages){
      
      formData.append('MutipleIMages', img);
    }
    
    this.http.post<any>('http://localhost:3003/multipleFiles', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}


