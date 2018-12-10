import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  constructor(private repository: SatcharitraRepository,
                private modalService: NgbModal) {
    this.images = repository.getAboutImages();
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

}
