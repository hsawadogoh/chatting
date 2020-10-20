import { Component, OnInit } from '@angular/core';
import {Image} from '../models/image';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  selectedFile: File = null;
  image: Image = new Image() ;
  imageUrl = '/assets/images/jhipster.png';
  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
  }

  onGetFile(event) {
    this.image = new Image();
    this.selectedFile = event.target.files[0];

    // Show preview image
    const reader = new FileReader();
    // tslint:disable-next-line:no-shadowed-variable
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.image.type = this.selectedFile.type;
      this.image.base64Value = event.target.result;
      console.log(this.image.base64Value);
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onUploadFile() {
    this.imageService.onSaveImage(this.image).subscribe(
      response => {
        console.log(response) ;
      },
      error => {
        console.log(error) ;
      }
    );
  }
}
