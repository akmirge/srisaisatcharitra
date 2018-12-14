import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public _url = '../../assets/data.json';
  public images: Image[];

  constructor(private httpService: HttpClient) {
  }

  ngOnInit() {
    this.httpService.get(this._url).subscribe(
      data => {
        this.images = data['profileImages'];
      }
    );
  }

  getProfileImage(id: number) {
    return this.images.find(image => image.id === id);
  }

}
