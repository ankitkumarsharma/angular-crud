import * as mongodb from "mongodb";

export interface User {
    name: string;
    email: string;
    mobile: string;
    _id?: mongodb.ObjectId;
}