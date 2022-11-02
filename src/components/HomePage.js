import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <Flex justifyContent="space-around">
        <Link to="./Login">
          <Button color="pink">Login</Button>
        </Link>
        <Link to="./Home">
          <Button color="pink">Register</Button>
        </Link>
      </Flex>
    </div>
  );
}

export default HomePage;
