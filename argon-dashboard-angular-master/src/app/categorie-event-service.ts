import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class CategorieEventService {
    readonly API_URL = 'http://localhost:8068/SpringMVC/categorie-event'
    constructor(private httpClient: HttpClient){}
    getCategorieEvents(){
        return this.httpClient.get(`${this.API_URL}/all-Categorie-event`)
    }
    addCategorieEvent(C: any){
        return this.httpClient.post(`${this.API_URL}/add-categorie-event`, C)
    }
    modifyCategorieEvent(C: any){
        return this.httpClient.put(`${this.API_URL}/modify-categorie-event`,C)
    }
    deleteCategorieEvent(idCategorie: Number){
        return this.httpClient.delete(`${this.API_URL}/remove-categorie-event/${idCategorie}`)
    }
    retrieveCategorieEvent(idCategorie: Number){
        return this.httpClient.get(`${this.API_URL}/retrieve-categorie-event/${idCategorie}`)
    }
    
    
}
