import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chapter } from 'src/app/model/chapter.model';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent implements OnInit {

  @Output() chapterSelected: EventEmitter<void> = new EventEmitter<void>();
  @Input() chapter: Chapter;
  @Input() preferredLanguageId: number;

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.chapterSelected.emit();
  }

}
