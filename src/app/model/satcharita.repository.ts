import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Chapter } from './chapter.model';
import { Image } from './image.model';
import { Language } from './model.language';
import { Satcharitra } from './model.satcharitra';

@Injectable()
export class SatcharitraRepository {
    private aboutImages: Image[];
    private homeImages: Image[];
    private localImages: Image[];
    private languages: Language[];
    private satcharitras: Satcharitra[];

    constructor(private dataSource: RestDataSource) {
        dataSource.aboutImages.subscribe(data => {
            this.aboutImages = data;
        });

        dataSource.homeImages.subscribe(data => {
            this.homeImages = data;
        });

        dataSource.localImages.subscribe(data => {
            this.localImages = data;
        });

        dataSource.getLanguages().subscribe(data => {
            this.languages = data;
        });

        dataSource.getSatcharitras().subscribe(data => {
           this.satcharitras = data;
        });

    }

    getAboutImages(): Image[] {
        return this.aboutImages;
    }

    getHomeImages(): Image[] {
        return this.homeImages;
    }

    getLocalImages(): Image[] {
        return this.localImages;
    }
    getLanguages(): Language[] {
        return this.languages;
    }

    getSatcharitras(): Satcharitra[] {
        return this.satcharitras;
    }

    getSatcharitraChapters(id: number): Chapter[] {
        return this.satcharitras.find(s => Number(s.id) === id).chapters;
    }

}
