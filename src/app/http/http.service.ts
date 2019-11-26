import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../types';

@Injectable()
export class HttpService {
  baseUrl = 'http://localhost:3000/items';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }
  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }
}
