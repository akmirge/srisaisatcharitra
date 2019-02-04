import { VratDate } from './vrat-date.model';
export class Vrat {
    constructor(
        public id: number,
        public title: string,
        public vratDates: Array<VratDate>,
        public description?: string,
        public content?: string,
        public imageUrl?: string,
        public alt?: string,
    ) {}
}


