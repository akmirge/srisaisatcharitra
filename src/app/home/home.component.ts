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
  public audio = new Audio();
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.playAudio();
    this.preferredLanguageId = null;
    this.httpService.get(this._url).subscribe(
      data => {
        this.languages = data['languages'];
        this.images = data['homeImages'];
      });
  }

  public playAudio() {
    this.audio.src = '../../assets/songs/sai_baba_vibhuti.mp3';
    this.audio.load();
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise.then(success => {
        console.log('Video playback started');
      })
      .catch(error => {
        console.log('Video playback failed');
      });
    }
  }

  public pauseAudio() {
    if (!this.audio.paused) {
      this.audio.pause();
    }
  }
}
