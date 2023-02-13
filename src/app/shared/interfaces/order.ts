import { IBookInCart } from "./book";

export interface IOrderOverview {
    id: string;
    createdAt: Date;
}

export interface IOrderDetails {
    id: string;
    items: IBookInCart[];
    processed: boolean;
    createdAt: Date;
}