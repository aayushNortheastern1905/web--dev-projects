import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={5}
    >
      {isLoading &&
        skeleton.map((s) => (
          // <GameCardContainer>
          <GameCardSkeleton key={s}></GameCardSkeleton>
          // </GameCardContainer>
        ))}
      {data.map((game) => (
        // <GameCardContainer>
        <GameCard key={game.id} game={game}></GameCard>
        // </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
