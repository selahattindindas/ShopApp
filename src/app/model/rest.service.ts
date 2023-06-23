import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Auth } from './auth.model';

@Injectable()
export class RestService {
  constructor(private http:HttpClient, @Inject("baseUrl") private baseUrl:string) { }
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl + 'category');
  }

  getDetails(producstsId:number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl + 'products/' + producstsId);
  }

  getAuths(email: string, password: string): Observable<Auth> {
    const token = this.generateRandomToken(32);
  
    return this.http.post<Auth>(this.baseUrl + 'orders', {
      email: email,
      password: password,
      returnSecureToken: true,
      token: token,
    });
  }

  private generateRandomToken(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
      
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  getLogin(email: string, password: string): Observable<Auth> {
    const token = this.generateRandomToken(32);
    return this.http.post<Auth>(this.baseUrl + 'orders', {
      email: email,
      password: password,
      returnSecureToken: true,
      token:token
    });
  }

}

