import { Component, Input, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { Chapter } from '../model/chapter.model';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit, OnChanges {
  @Input() preferredLanguageId: number;
  public selectedChapter: Chapter;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.selectedChapter = null;
  }

}
