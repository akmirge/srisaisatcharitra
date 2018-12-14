export class Message {
    public text: string;
    constructor(text: string,
        public error: boolean = false) {
        this.text = text;
    }
}
