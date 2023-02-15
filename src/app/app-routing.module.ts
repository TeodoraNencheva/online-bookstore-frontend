import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './admin/add-author/add-author.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { AuthorComponent } from './author/author/author.component';
import { AuthorsComponent } from './author/authors/authors.component';
import { BookComponent } from './book/book/book.component';
import { BooksComponent } from './book/books/books.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthActivate } from './shared/guards/auth.activate';
import { GenreTitleResolver } from './shared/resolvers/genre-title-resolver';
import { CartComponent } from './user/cart/cart.component';
import { OrderComponent } from './user/order/order.component';
import { OrdersComponent } from './user/orders/orders.component';

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
      title: 'Login',
      canActivate: [AuthActivate],
      data: {
        loginRequired: false
      }
    },
    {
      path: 'logout',
      canActivate: [AuthActivate],
      component: LogoutComponent,
      data: {
        loginRequired: true
      }
    },
    {
      path: 'register',
      canActivate: [AuthActivate],
      component: RegisterComponent,
      title: 'Register',
      data: {
        loginRequired: false
      }
    },
    {
      path: 'register-verify',
      canActivate: [AuthActivate],
      component: VerificationComponent,
      title: 'Verify registration',
      data: {
        loginRequired: false
      }
    }
  ]
},
{
  path: 'user',
  children: [
    {
      path: 'cart',
      canActivate: [AuthActivate],
      component: CartComponent,
      title: 'My cart',
      data: {
        loginRequired: true
      }
    },
    {
      path: 'orders',
      canActivate: [AuthActivate],
      pathMatch: 'full',
      component: OrdersComponent,
      title: 'My orders',
      data: {
        loginRequired: true
      }
    },
    {
      path: 'orders/:id/details',
      canActivate: [AuthActivate],
      component: OrderComponent,
      title: 'Order details',
      data: {
        loginRequired: true
      }
    }
  ]
},
{
  path: 'admin',
  children: [
    {
      path: 'add-book',
      canActivate: [AuthActivate],
      component: AddBookComponent,
      title: 'Add new book',
      data: {
        loginRequired: true
      }
    },
    {
      path: 'add-author',
      canActivate: [AuthActivate],
      component: AddAuthorComponent,
      title: 'Add new author',
      data: {
        loginRequired: true
      }
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
