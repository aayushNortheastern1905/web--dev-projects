import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedOrder: (sort: string) => void;
  selectedOrder: string;
}

const OrderMenu = ({ onSelectedOrder, selectedOrder }: Props) => {
  const orderBy = [
    { value: "", label: "Relavance", id: 1 },
    { value: "name", label: "Name", id: 2 },
    { value: "-name", label: "Name DESC", id: 3 },
    { value: "-released", label: "Date Released", id: 4 },
    { value: "-added", label: "Date Added", id: 5 },
    { value: "-created", label: "Date Created", id: 6 },
    { value: "-updated", label: "Date Updated", id: 7 },
    { value: "-rating", label: "Rating", id: 8 },
    { value: "-metacritic", label: "Metacritic", id: 9 },
  ];

  const currentOrder = orderBy.find((order) => order.value === selectedOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {orderBy.map((order) => (
          <MenuItem
            key={order.id}
            value={order.value}
            onClick={() => onSelectedOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderMenu;
