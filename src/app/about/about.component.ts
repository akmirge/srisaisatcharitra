import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Image } from '../model/image.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  public images: Image[];
  public _url = '../../assets/data.json';

  constructor(private httpService: HttpClient,
    private modalService: NgbModal) {}

  ngOnInit(): void  {
    this.httpService.get(this._url).subscribe(
      data => {
        this.images = data['aboutImages'];
      }
    );
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', size: 'lg', centered: true});
  }
}
