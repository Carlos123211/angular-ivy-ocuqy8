import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(public http: HttpClient) {}

  getPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
}
