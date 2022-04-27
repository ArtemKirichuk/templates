import { Type, } from "@angular/core";

export class ItemDescription {
    static ninstanse:number = 0;
    count: number = 0;
    constructor(public component: Type<any>, public data: any, public type?: string) {
        this.fnInc()

    }
    fnInc() {
        this.count = ItemDescription.ninstanse++;
        
    }
}
