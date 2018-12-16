import { Component, OnInit, Input } from '@angular/core';
import { Chapter } from 'src/app/model/chapter.model';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

  @Input() chapter: Chapter;
  @Input() preferredLanguageId: number;

  constructor() { }

  ngOnInit() {
  }

}
