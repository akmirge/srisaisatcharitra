import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-shri-ram',
  templateUrl: './shri-ram.component.html',
  styleUrls: ['./shri-ram.component.css']
})
export class ShriRamComponent implements OnInit {
  public _url = '../../assets/data.json';
  public urls: string[];
  public safeUrls: SafeResourceUrl[] = [];
  public isIntroCollapsed = false;
  public isVideosCollapsed = false;
  constructor(private httpService: HttpClient,
                private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.httpService.get(this._url).subscribe(data => {
      this.urls = data['youtubeUrls'];
      this.urls.forEach(item => {
        this.safeUrls.push(this._sanitizer.bypassSecurityTrustResourceUrl(item));
      });
    });
  }
}
