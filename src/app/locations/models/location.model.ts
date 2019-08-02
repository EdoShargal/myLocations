export class Location {
    constructor(
        private name: string,
        private address: string,
        private latitude: number,
        private longitude: number,
        private category: number,
        private branchId: number){}
}