import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeleton: number[] = Array.from(
    { length: 15 },
    (_, index) => index + 1
  );

  return (
    <List>
      {skeleton.map((genre) => (
        <ListItem key={genre} paddingY={1}>
          <HStack>
            <Skeleton boxSize="32px" borderRadius={5}></Skeleton>
            <SkeletonText fontSize="2xl">skeleton</SkeletonText>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
