export class Count {
    totalDone: number;
    totalUndone: number;
    total: number;
    constructor (done, undone) {
        this.totalDone = done;
        this.totalUndone = undone;
        this.total = 0 ;
    }

}