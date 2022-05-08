import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ClasseService {
    readonly API_URL = 'http://localhost:8068';
    constructor(private httpClient: HttpClient) {}
    
    getAllClasses()
    {
        return this.httpClient.get(`${this.API_URL}/all-classes`)
    }

    addClasse(classe:any) 
    {
        return this.httpClient.post(`${this.API_URL}/add-classe`,classe)
    }

    modifyClasse(classe:any)
    {
        return this.httpClient.put(`${this.API_URL}/update-classe`,classe)
    }

    removeClasse(idclasse:any)
    {
        return this.httpClient.delete(`${this.API_URL}/remove-classe/${idclasse}`)
    }

}
