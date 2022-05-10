import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from '../Models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl1="http://localhost:8068/Publication/affiche";
  constructor(private httpClient : HttpClient) { }

  getPost() : Observable<Publication[]> { 
    return this.httpClient.get<Publication[]>(`${this.baseUrl1}`);
  }
  private baseUrl2="http://localhost:8068/Publication/add-post";

  addpost(Publication : Publication) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl2}`, Publication) ;
  }
  private baseUrl3="http://localhost:8068/Publication/remove-post";

    DeletePost(idPost : number ) : Observable<any>{

    return this.httpClient.delete(`${this.baseUrl3}/${idPost}`) ; 
  }

  


  
}
