import { Chapter } from './chapter.model';

export class Satcharitra {
    constructor(
        public id: number,
        public language: string,
        public chapters: Chapter[]
    ) {}
}
