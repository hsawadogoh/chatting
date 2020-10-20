import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Image} from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  host = 'http://localhost:1000';
  constructor(
    private http: HttpClient
  ) { }

  onSaveImage(image: Image) {
    return this.http.post(this.host + '/listeImages' , image) ;
  }

  onGetAllImages() {
    return this.http.get(this.host + '/listeImages') ;
  }
}
