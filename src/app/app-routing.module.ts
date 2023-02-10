import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { AuthorComponent } from './author/author/author.component';
import { AuthorsComponent } from './author/authors/authors.component';
import { BookComponent } from './book/book/book.component';
import { BooksComponent } from './book/books/books.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { GenreTitleResolver } from './shared/resolvers/genre-title-resolver';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
},
{
  path: 'books',
  children: [
    {
      path: '',
      pathMatch: 'full',
      title: 'All books',
      component: BooksComponent
    },
    {
      path: ':bookId/details',
      component: BookComponent,
      title: 'Book details',
    },
    {
      path: ':genre',
      component: BooksComponent,
      title: GenreTitleResolver
    }
  ]
},
{
  path: 'authors',
  children: [
    {
      path: '',
      pathMatch: 'full',
      title: 'Authors',
      component: AuthorsComponent
    },
    {
      path: ':authorId',
      title: 'Author details',
      component: AuthorComponent
    }
  ]
},
{
  path: 'auth',
  children: [
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login'
    },
    {
      path: 'logout',
      component: LogoutComponent
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register'
    },
    {
      path: 'register-verify',
      component: VerificationComponent,
      title: 'Verify registration'
    }
  ]
},
{
  path: '**',
  component: NotFoundComponent,
  title: 'Page not found'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
