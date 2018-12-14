import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterListComponent } from './chapters/chapter-list/chapter-list.component';
import { ChapterDetailComponent } from './chapters/chapter-detail/chapter-detail.component';
import { ChapterItemComponent } from './chapters/chapter-item/chapter-item.component';
import { MessageModule } from './messages/message.module';
import { ExternalUrlDirective } from './external-url.directive';
import { NotFoundComponent } from './not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ChaptersComponent,
    ChapterListComponent,
    ChapterDetailComponent,
    ChapterItemComponent,
    NotFoundComponent,
    ExternalUrlDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    UiModule,
    MessageModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
