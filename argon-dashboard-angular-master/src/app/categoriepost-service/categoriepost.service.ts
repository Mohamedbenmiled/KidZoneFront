import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoriepost } from '../Models/categoriepost';

@Injectable({
  providedIn: 'root'
})
export class CategoriepostService {

  private baseUrl1="http://localhost:8068/CategoriePost/affiche";
  constructor(private httpClient : HttpClient) { }

  getCategoryPost() : Observable<Categoriepost[]> { 
    return this.httpClient.get<Categoriepost[]>(`${this.baseUrl1}`);
  }
  private baseUrl2="http://localhost:8068/CategoriePost/add-categ";

  addCategoriepost(categoriepost : Categoriepost) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl2}`, categoriepost) ;
  }
  private baseUrl3="http://localhost:8068/CategoriePost/remove-CategoriePost";

  Deletecateg(idCategoriePost : number ) : Observable<any>{

    return this.httpClient.delete(`${this.baseUrl3}/${idCategoriePost}`) ; 
  }

  private baseUrl4="http://localhost:8068/CategoriePost/pdf";
  Pdf(idCategoriePost : number ) : Observable<any>{

    return this.httpClient.get(`${this.baseUrl4}/${idCategoriePost}`) ; 
  }


  
}
