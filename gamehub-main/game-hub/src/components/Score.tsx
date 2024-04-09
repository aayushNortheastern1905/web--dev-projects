import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  const color = score > 90 ? "green" : score >= 85 ? "yellow" : "";
  return (
    <Badge fontSize="14px" colorScheme={color} paddingX={2} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default Score;
