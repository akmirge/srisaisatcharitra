export class Song {
    constructor(
        public id: string,
        public title: string,
        public audioUrl: string,
        public description?: string,
        public imageUrl?: string,
        public alt?: string,
    ) {}
}
