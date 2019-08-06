export class Location {
    constructor(
        public name: string,
        public address: string,
        public latitude: number,
        public longitude: number,
        public category: number,
        public locationId: number,
        public bankCode: string,
        public brancCode: string){}
}