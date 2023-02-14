import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './user/user.module';
import { jwtInterceptorProvider } from './core/interceptors/jwt-interceptor';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    BookModule,
    AuthorModule,
    AuthModule,
    UserModule,
    AdminModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [jwtInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
