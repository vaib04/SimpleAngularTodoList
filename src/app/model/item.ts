export class Item {
    id: number;
    label: string;
    priority: number;
    done: boolean;
    constructor(label, priority, done) {
        this.label = label;
        this.priority = priority;
        this.done = done;
    }
}
