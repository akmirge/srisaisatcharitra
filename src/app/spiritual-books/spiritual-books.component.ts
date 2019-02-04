import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book.model';
import { Language } from '../model/model.language';
import { Song } from '../model/song.model';
import { Vrat } from '../model/vrat.model';

@Component({
  selector: 'app-spiritual-books',
  templateUrl: './spiritual-books.component.html',
  styleUrls: ['./spiritual-books.component.css']
})
export class SpiritualBooksComponent implements OnInit, OnChanges { 
  public _url = '../../assets/data.json';
  public languages: Language[];
  public bookLanguages: Language[];
  public audioLanguages: Language[];
  public englishBooks: Book[];
  public hindiBooks: Book[];
  public teluguBooks: Book[];
  public saibabaAartis: Song[];
  public englishGitaSongs: Song[];
  public hindiGitaSongs: Song[];
  public teluguGitaSongs: Song[];
  public vrats: Vrat[];
  public selectedVrat: Vrat;
  public isBabaAartisCollapsed = false;
  public preferredBookLanguageId: number = null;
  public preferredAudioLanguageId: number = null;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get(this._url).subscribe(
      data => {
        this.languages = data['spiritualLanguages'];
        this.bookLanguages = data['spiritualLanguages'];
        this.audioLanguages = data['spiritualLanguages'];
        this.englishBooks = data['englishBooks'];
        this.hindiBooks = data['hindiBooks'];
        this.teluguBooks = data['teluguBooks'];
        this.saibabaAartis = data['saibabaAartis'];
        this.englishGitaSongs = data['bhagvadGitasEnglish'];
        this.hindiGitaSongs = data['bhagvadGitasHindi'];
        this.teluguGitaSongs = data['bhagvadGitasTelugu'];
        this.vrats = data['vrats'];
    });
  }

  ngOnChanges() {
    this.selectedVrat = null;
  }

  get books() {
    switch (this.preferredBookLanguageId) {
      case 1:
        return this.hindiBooks;
        break;
      case 2:
        return this.teluguBooks;
        break;
      case 3:
        return this.englishBooks;
        break;
    }
  }

  get gitaSongs() {
    switch (this.preferredAudioLanguageId) {
      case 1:
        return this.hindiGitaSongs;
        break;
      case 2:
        return this.teluguGitaSongs;
        break;
    case 3:
        return this.englishGitaSongs;
        break;
    }
  }

  getLanguageName(languageId: number): string {
    return this.languages.find(language => language.id === languageId).name;
  }

  onSelection(vrat: Vrat) {
    this.selectedVrat = vrat;
  }
}
