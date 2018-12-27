import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-spiritual-books',
  templateUrl: './spiritual-books.component.html',
  styleUrls: ['./spiritual-books.component.css']
})
export class SpiritualBooksComponent implements OnInit {
  public _url = '../../assets/data.json';
  public englishBooks: Book[];
  public hindiBooks: Book[];
  public teluguBooks: Book[];
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get(this._url).subscribe(
      data => {
        this.englishBooks = data['englishBooks'];
        this.hindiBooks = data['hindiBooks'];
        this.teluguBooks = data['teluguBooks'];
        console.log('this.teluguBooks ' + JSON.stringify(this.teluguBooks));
    });
  }

}
