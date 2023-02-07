import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GenreTitleResolver } from "../shared/resolvers/genre-title-resolver";
import { BookComponent } from "./book/book.component";
import { BooksComponent } from "./books/books.component";

const routes: Routes = [
    {
        path: 'all-books',
        pathMatch: 'full',
        component: BooksComponent
    },
    {
        path: 'books/:bookId/details',
        component: BookComponent,
        title: 'Book details',
    },
    {
        path: 'books/:genre',
        component: BooksComponent,
        title: GenreTitleResolver
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRouingModule { }