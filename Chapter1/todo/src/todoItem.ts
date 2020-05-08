export class TodoItem {

    //public is used in constructor to make clear concise constructor syntax is being used
    constructor(public id: number, 
                public task: string, 
                public complete: boolean = false){
        
        //no statements required, following statements are done automatically
        //this.id = id;
        //this.task = task;
        //this.complete = complete;
    }

    //public is standard if not given differently
    printDetails(): void {
        //  \t --> Tab
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)": ""}`);
    }
}