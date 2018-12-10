import { Component, OnInit } from '@angular/core';
import { SatcharitraRepository } from '../model/satcharita.repository';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public images: Image[];

  constructor(private repository: SatcharitraRepository) {
    this.images = repository.getProfileImages();
   }

  ngOnInit() {
  }

  getProfileImage(id: number) {
    return this.images.find(image => image.id === id);
  }

}
