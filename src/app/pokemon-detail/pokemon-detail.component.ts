import { Component, OnInit, Input } from '@angular/core';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail:any;

  @Input() pokemon:any;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
  }


}
