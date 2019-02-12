import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Chapter } from 'src/app/model/chapter.model';
import { HttpClient } from '@angular/common/http';
import { Satcharitra } from 'src/app/model/model.satcharitra';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit, OnChanges {
  @Input() preferredLanguageId: number;
  public satcharitras: Satcharitra[];
  public chapters: Chapter[] = [];
  @Output() chapterWasSelected = new EventEmitter<Chapter>();
  public chaptersPerPage = 10;
  public selectedPage = 1;
  public _url = '../../assets/data.json';

  constructor(private httpService: HttpClient) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.chaptersPerPage = 10;
    this.selectedPage = 1;
    this.loadChaptersPerPage();
  }

  private loadChaptersPerPage() {
    const pageIndex = (this.selectedPage - 1) * this.chaptersPerPage;
    this.httpService.get(this._url).toPromise()
      .then((data: any) => {
        this.satcharitras = data['satcharitras'];
        this.chapters = this.getSatcharitraChapters(this.preferredLanguageId)
        .slice(pageIndex, pageIndex + this.chaptersPerPage);
      });
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
    return this.satcharitras.find(s => Number(s.id) === id).chapters;
  }

  onChapterSelection(chapter: Chapter) {
    this.chapterWasSelected.emit(chapter);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chapters, event.previousIndex, event.currentIndex);
  }
}
