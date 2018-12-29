export class Song {
    constructor(
        public id: string,
        public title: string,
        public alt: string,
        public description: string,
        public imageUrl: string,
        public audioUrl: string
    ) {}
}
