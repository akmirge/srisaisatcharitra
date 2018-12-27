export class Book {
    constructor(
        public id: string,
        public title: string,
        public alt: string,
        public description: string,
        public imageUrl: string,
        public pdfUrl: string
    ) {}
}
