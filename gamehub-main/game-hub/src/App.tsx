import { Box, Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/useGame";
import OrderMenu from "./components/OrderMenu";
import DynamicGameHeading from "./components/DynamicGameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <GenreList
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box padding={3}>
          <DynamicGameHeading gameQuery={gameQuery}></DynamicGameHeading>
          {/* Or use Flex tag instead of Hstack and place one of the coponents in a Box for spacing, marginRight */}
          <HStack spacing={5} marginBottom={3}>
            <PlatformMenu
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformMenu>
            <OrderMenu
              onSelectedOrder={(sort: string) =>
                setGameQuery({ ...gameQuery, sort })
              }
              selectedOrder={gameQuery.sort}
            ></OrderMenu>
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
