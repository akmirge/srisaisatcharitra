import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book.model';
import { Language } from '../model/model.language';
import { Song } from '../model/song.model';

@Component({
  selector: 'app-spiritual-books',
  templateUrl: './spiritual-books.component.html',
  styleUrls: ['./spiritual-books.component.css']
})
export class SpiritualBooksComponent implements OnInit {
  public _url = '../../assets/data.json';
  public languages: Language[];
  public englishBooks: Book[];
  public hindiBooks: Book[];
  public teluguBooks: Book[];
  public saibabaAartis: Song[];
  public preferredLanguageId: number = null;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get(this._url).subscribe(
      data => {
        this.languages = data['languages'];
        this.englishBooks = data['englishBooks'];
        this.hindiBooks = data['hindiBooks'];
        this.teluguBooks = data['teluguBooks'];
        this.saibabaAartis = data['saibabaAartis'];
    });
  }

  get books() {
    switch (this.preferredLanguageId) {
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

}
