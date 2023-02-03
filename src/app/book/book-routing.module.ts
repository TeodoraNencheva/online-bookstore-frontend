import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
        data: {
            title: 'Book details'
        }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRouingModule { }