import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBookDetails, IBookInCart, IBookOverview } from 'src/app/shared/interfaces/book';
import { environment } from 'src/environments/environment';
import { IGenre } from 'src/app/shared/interfaces/genre';
import { IAuthorDetails, IAuthorOverview } from 'src/app/shared/interfaces/author';
import { IAuthResponse, IRegisterDTO } from 'src/app/shared/interfaces/auth';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadAllBooks(size: number, page: number) {
    return this.http.get<IBookOverview[]>(`${apiUrl}/api/books/all?size=${size}&page=${page}`);
  }

  loadBooksByGenre(genre: string, size: number, page: number) {
    return this.http.get<IBookOverview[]>(`${apiUrl}/api/books/${genre}?size=${size}&page=${page}`);
  }

  loadBooksByAuthor(authorId: number) {
    return this.http.get<IBookOverview[]>(`${apiUrl}/api/books?authorId=${authorId}`);
  }

  loadBooksCountByGenre(genre: string) {
    return this.http.get<number>(`${apiUrl}/api/books/${genre}/count`);
  }

  loadAllBooksCount() {
    return this.http.get<number>(`${apiUrl}/api/books/all/count`);
  }

  loadBook(id: string) {
    return this.http.get<IBookDetails>(`${apiUrl}/api/books/${id}/details`);
  }

  loadGenres() {
    return this.http.get<IGenre[]>(`${apiUrl}/api/books/all-genres`);
  }

  loadAuthors(size: number, page: number) {
    return this.http.get<IAuthorOverview[]>(`${apiUrl}/api/authors?size=${size}&page=${page}`);
  }

  loadAuthorsCount() {
    return this.http.get<number>(`${apiUrl}/api/authors/count`);
  }

  loadAuthorDetails(id: number) {
    return this.http.get<IAuthorDetails>(`${apiUrl}/api/authors/${id}`);
  }

  login(data: { username: string, password: string }) {
    return this.http.post<IAuthResponse>(`${apiUrl}/api/auth/login`, data);
  }

  register(data: IRegisterDTO) {
    return this.http.post(`${apiUrl}/api/auth/register`, data);
  }

  confirmRegistration(token: string) {
    return this.http.get(`${apiUrl}/api/auth/register/verify?token=${token}`)
  }

  loadCart() {
    return this.http.get<IBookInCart[]>(`${apiUrl}/api/cart`);
  }

  addToCart(bookId: number, quantity: number) {
    return this.http.post(`${apiUrl}/api/cart`, { bookId, quantity });
  }

  removeFromCart(bookId: number) {
    return this.http.delete(`${apiUrl}/api/cart/${bookId}`);
  }
}
