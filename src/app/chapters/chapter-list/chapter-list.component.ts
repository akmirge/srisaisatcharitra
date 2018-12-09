import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Chapter } from 'src/app/model/chapter.model';
import { SatcharitraRepository } from 'src/app/model/satcharita.repository';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit, OnChanges {
  @Input() preferredLanguageId: number;
  public chapters: Chapter[] = [];
  @Output() chapterWasSelected = new EventEmitter<Chapter>();
  public chaptersPerPage = 5;
  public selectedPage = 1;

  constructor(private repository: SatcharitraRepository) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.chaptersPerPage = 5;
    this.selectedPage = 1;
    this.loadChaptersPerPage();
  }

  private loadChaptersPerPage() {
    const pageIndex = (this.selectedPage - 1) * this.chaptersPerPage;
    this.chapters = this.getSatcharitraChapters(this.preferredLanguageId)
      .slice(pageIndex, pageIndex + this.chaptersPerPage);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
    this.loadChaptersPerPage();
  }

  changePageSize(newSize: number) {
    this.chaptersPerPage = Number(newSize);
    this.changePage(1);
    this.loadChaptersPerPage();
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.getSatcharitraChapters(this.preferredLanguageId).length / this.chaptersPerPage))
                .fill(0).map((x, i) => i + 1);
  }

  getSatcharitraChapters(id: number): Chapter[] {
    return this.repository.getSatcharitraChapters(id);
  }

  onChapterSelection(chapter: Chapter) {
    this.chapterWasSelected.emit(chapter);
  }
}
