import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classe } from '../classe';


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  readonly API_URL = 'http://localhost:8068/SpringMVC/classe';
  constructor(private http: HttpClient) {}    
    
  getAllClasses()
    {
        let classes= this.http.get(`${this.API_URL}/all-classes`)
        console.log("classes",classes)
        return classes

    }

    public addClasse(classe:any)
    {
        return this.http.post(`${this.API_URL}/add-classe`,classe)
    }

    modifyClasse(classe:any)
    {
        return this.http.put(`${this.API_URL}/update-classe`,classe)
    }

    removeClasse(idclasse:any)
    {
        return this.http.delete(`${this.API_URL}/remove-classe/${idclasse}`)
    }
   
    findClasse(idClasse:any)
    {
        return this.http.get(`${this.API_URL}/retrieve-classe/${idClasse}`)
    }

}
