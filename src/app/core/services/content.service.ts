import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBookDetails, IBookOverview } from 'src/app/shared/interfaces/book';
import { environment } from 'src/environments/environment';
import { IGenre } from 'src/app/shared/interfaces/genre';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadAllBooks(size: number = 8, page: number = 0) {
    return this.http.get<IBookOverview[]>(`${apiUrl}/api/books/all?size=${size}&page=${page}`);
  }

  loadBooksByGenre(genre: string, size: number = 8, page: number = 0) {
    return this.http.get<IBookOverview[]>(`${apiUrl}/api/books/${genre}?size=${size}&page=${page}`);
  }

  loadBook(id: string) {
    return this.http.get<IBookDetails>(`${apiUrl}/api/books/${id}/details`);
  }

  loadGenres() {
    return this.http.get<IGenre[]>(`${apiUrl}/api/books/all-genres`);
  }
}
