import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model';
import { HttpClient } from '@angular/common/http';
import { Language } from '../model/model.language';

@Component({
  selector: 'app-nav-guruwar',
  templateUrl: './nav-guruwar.component.html',
  styleUrls: ['./nav-guruwar.component.css']
})
export class NavGuruwarComponent implements OnInit {
  public _url = '../../assets/data.json';
  public isIntroCollapsed = false;
  public isRulesCollapsed = false;
  public isCompletionCollapsed = false;
  public images: Image[];
  public languages: Language[] = [];
  public preferredLanguage: Language = null;
  public showPreview: boolean;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get(this._url).subscribe(
      data => {
        this.images = data['navGuruwarImages'];
        this.languages = data['navGuruwarLanguages'];
      }
    );
  }

}
