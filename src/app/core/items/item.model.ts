//Using interfaces for models:
// Interfaces are only at compile time.
// This allows only you to check that the expected data received follows a particular structure.
/*export interface Item {
    id?:string;
    name:string;
    description?:string;
}*/


//Using classes for models:
//Possible to do private properties
//Possible to do initialization logic in constructor
export class Item {

    constructor(

        public name: string,
        public description?:string,

        //Since item's in this project are stored in Firestore,
        //let's use the auto-ID assigned there
        public id?:string
    ) {
    }
}