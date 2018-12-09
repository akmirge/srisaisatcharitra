import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Satcharitra } from './model.satcharitra';
import { Chapter } from './chapter.model';
import { Language } from './model.language';
import { Image } from './image.model';

const PROTOCOL = 'http';
const PORT = '3500';

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private $http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getLanguages(): Observable<Language[]> {
        return this.$http.get<Language[]>(this.baseUrl + 'languages');
    }

    get aboutImages(): Observable<Image[]> {
        return this.$http.get<Image[]>(this.baseUrl + 'aboutImages');
    }

    get homeImages(): Observable<Image[]> {
        return this.$http.get<Image[]>(this.baseUrl + 'homeImages');
    }

    get localImages(): Observable<Image[]> {
        return this.$http.get<Image[]>(this.baseUrl + 'localImages');
    }

    getSatcharitras(): Observable<Satcharitra[]> {
        return this.$http.get<Satcharitra[]>(this.baseUrl + 'satcharitras');
    }

    // getSatcharitraChapters(id: number): Observable<Chapter[]> {
    //     const param: any = {'id': id};
    //     return this.$http.get<Chapter[]>(this.baseUrl + 'satcharitras', {params: param});
    //     // return this.$http.get<Chapter[]>(this.baseUrl + 'satcharitras/${id}');
    // }
}
