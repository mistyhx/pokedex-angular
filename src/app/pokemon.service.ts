import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private URL = 'https://pokeapi.co/api/v2/pokemon'
  getPokemons():Observable<any>{
    return this.http.get<any>(this.URL)
      .pipe(
        tap(_=>console.log("success")),
        catchError(this.handleError<any>("failed")))
  }
}
