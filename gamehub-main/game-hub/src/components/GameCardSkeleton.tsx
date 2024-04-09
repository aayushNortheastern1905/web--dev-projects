import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    // width={280} borderRadius={10} overflow="hidden"
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height={200}></Skeleton>
      <CardBody>
        <SkeletonText fontSize="2xl"></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
