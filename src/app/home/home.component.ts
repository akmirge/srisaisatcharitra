import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model';
import { Language } from '../model/model.language';
import { SatcharitraRepository } from '../model/satcharita.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: Image[];
  public languages: Language[];
  public preferredLanguageId: number;

  constructor(private repository: SatcharitraRepository) {
    this.images = repository.getHomeImages();
    this.languages = repository.getLanguages();
  }

  ngOnInit(): void  {
    this.preferredLanguageId = null;
    this.getImages();
    this.getLanguages();
  }

  getImages() {
    return this.images;
  }

  getLanguages() {
    return this.languages;
  }
}
