"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    //public is used in constructor to make clear concise constructor syntax is being used
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        //no statements required, following statements are done automatically
        //this.id = id;
        //this.task = task;
        //this.complete = complete;
    }
    //public is standard if not given differently
    printDetails() {
        //  \t --> Tab
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
