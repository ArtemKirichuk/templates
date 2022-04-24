import { Type, } from "@angular/core";
var count:number = 0;
export class ItemDescription {
    count:number = count;
    constructor(public component:Type<any>,public data:any,public type?:string){
        count++;
    }
}
