import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Image } from '../model/image.model';
import { Language } from '../model/model.language';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: Image[];
  public languages: Language[];
  public preferredLanguageId: number;
  public _url = '../../assets/data.json';
  public audioUrl = '../../assets/songs/sai_baba_vibhuti.mp3';
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.preferredLanguageId = null;
    this.httpService.get(this._url).subscribe(
      data => {
        this.languages = data['languages'];
        this.images = data['homeImages'];
      });
  }
}
