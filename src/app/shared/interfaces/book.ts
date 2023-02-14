export interface IBookOverview {
    id: number;
    title: string;
    author: {
        id: number;
        firstName: String,
        lastName: String,
        biography: String,
        picture: {
            url: string,
            publicId: string
        },
        fullName: string;
    };
    genre: string;
    picture: String;
}

export interface IBookDetails {
    id: number;
    title: string;
    author: {
        id: number;
        firstName: String,
        lastName: String,
        biography: String,
        picture: {
            url: string,
            publicId: string
        },
        fullName: string;
    };
    genre: string;
    yearOfPublication: string;
    summary: string;
    picture: string;
    price: number;
}

export interface IBookInCart {
    id: number;
    title: string;
    authorId: number;
    authorFullName: string;
    quantity: number;
    price: number;
}

export interface IAddBookToCart {
    bookId: number;
    quantity: number;
}

export interface IAddNewBook {
    title: string;
    authorId: number;
    genreId: number;
    yearOfPublication: string;
    summary: string;
    price: number;
}