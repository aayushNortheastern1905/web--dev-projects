import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";

interface Props{
  selectedGenre: Genre
}

export interface Platform{
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform: Platform}[]
    metacritic: number
    rating_top: number
  }

const useGame = ( gameQuery: GameQuery) => 
  useData<Game>('/games',{params:
                                  {
                                    genres: gameQuery.genre?.id,
                                    parent_platforms: gameQuery.platform?.id, 
                                    ordering: gameQuery.sort,
                                    search: gameQuery.search
                                  }},[gameQuery])

export default useGame