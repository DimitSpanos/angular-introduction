import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ChuckNorrisJoke, DadJoke } from '../interfaces/jokes';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_API_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({ //mas dinei th dunatothta na kanoume inject to service se ena component
  providedIn: 'root'
})
export class JokesService {
  http: HttpClient = inject(HttpClient); //http is the name of the service which is type HttpClient and we inject it in the constructor
  
  getDadJoke() { 
    return this.http.get<DadJoke>(DAD_JOKES_API_URL, { //DadJoke is the type of the response from the interface jokes.ts
      headers: {
        'Accept': 'application/json',
      }
    })
  }                   

  

  getChuckNorrisJoke() {
    return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_API_URL, { //ChuckNorrisJoke is the type of the response from the interface jokes.ts
      headers: {
        'Accept': 'application/json',
      }
    })
  }
}
