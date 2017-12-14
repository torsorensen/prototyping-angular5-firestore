import { Injectable } from '@angular/core';

@Injectable()
export class DebugService {

    constructor() { 
        this.log(DebugService.name, "()");
    }

    log(className:string, methodName:string, msg:string = "") {
        let str:string = className;
        methodName ? str += " | " + methodName : "";
        msg ? str += " | " + msg : "";
        console.log(str);
    }
}
