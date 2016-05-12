angular.module('PokemonApp')
  .factory('PokemonFactory', PokemonFactory);

PokemonFactory.$inject = ['$http'];

function PokemonFactory($http) {
    var pokedexURL = 'http://pokeapi.co/api/v1/pokedex/1';
    var pokemonURL = 'http://pokeapi.co/';
    var pokeFactory = {};

    pokeFactory.getAllPokemon = function() {
      return $http.get(pokedexURL);
    };

    pokeFactory.getOnePokemon = function(id) {
      return $http.get(pokemonURL + id);
    };

    return pokeFactory;
}


