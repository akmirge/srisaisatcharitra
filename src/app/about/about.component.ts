import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Image } from '../model/image.model';
import { SatcharitraRepository } from '../model/satcharita.repository';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  public images: Image[];
  public localImages: Image[];
  constructor(private repository: SatcharitraRepository,
                private modalService: NgbModal) {
    this.images = repository.getAboutImages();
    this.localImages = repository.getLocalImages();
  }

  ngOnInit() {
    this.getImages();
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', size: 'lg', centered: true});
  }


  getImages() {
    return this.images;
  }

  getLocalImage(id: number) {
   return this.localImages.find(image => image.id === id);
  }
}
