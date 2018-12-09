import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { SatcharitraRepository } from './satcharita.repository';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';
import { Satcharitra } from './model.satcharitra';

@Injectable()
export class ModelResolver {

    constructor(
        private repository: SatcharitraRepository,
        private dataSource: RestDataSource,
        private messages: MessageService) {}

        resolve(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<any[]> {
                    if (!this.repository.getAboutImages() ||
                        this.repository.getAboutImages().length === 0) {
                        this.messages.reportMessage(new Message('Loading data...'));
                        return this.dataSource.aboutImages;
                    }
                    if (!this.repository.getHomeImages() ||
                        this.repository.getHomeImages().length === 0) {
                        this.messages.reportMessage(new Message('Loading data...'));
                        return this.dataSource.homeImages;
                    }
                    if (!this.repository.getLocalImages() ||
                        this.repository.getLocalImages().length === 0) {
                        this.messages.reportMessage(new Message('Loading data...'));
                        return this.dataSource.localImages;
                    }
                    if (this.repository.getLanguages().length === 0) {
                        this.messages.reportMessage(new Message('Loading data...'));
                        return this.dataSource.getLanguages();
                    }
                    if (this.repository.getSatcharitras().length === 0) {
                        this.messages.reportMessage(new Message('Loading data...'));
                        return this.dataSource.getSatcharitras();
                    }
        }
}
