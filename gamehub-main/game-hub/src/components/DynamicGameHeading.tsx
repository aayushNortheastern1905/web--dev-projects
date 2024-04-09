import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Prop {
  gameQuery: GameQuery;
}

const DynamicGameHeading = ({ gameQuery }: Prop) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default DynamicGameHeading;
