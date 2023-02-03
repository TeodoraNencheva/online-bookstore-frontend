export interface IBookOverview {
    id: number;
    title: string;
    author: {
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