import { Component, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons:Array<any> = [];
  selectedPokemon: any;
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons():void{
    this.pokemonService.getPokemons()
      .subscribe(result => this.pokemons = result.results)

  }

  onSelect(pokemon:any):void{
       this.selectedPokemon = pokemon;
       console.log(this.selectedPokemon);
  }

}
