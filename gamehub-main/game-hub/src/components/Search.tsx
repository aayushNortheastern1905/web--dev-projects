import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Prop {
  onSearch: (search: string) => void;
}

const Search = ({ onSearch }: Prop) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default Search;
