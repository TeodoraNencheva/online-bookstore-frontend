import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './book/books/books.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'all-books'
},
{
  path: 'all-books',
  component: BooksComponent,
  title: 'All books',
  data: {
    title: 'All books'
  } 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
