import axios from 'axios'
import { IsPokemon } from '../interfaces'

export const getPokemon = async (pokemonId: number): Promise<IsPokemon> => {
  const { data } = await axios.get<IsPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  )

  return data
}
