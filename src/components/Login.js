import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState("", () => {
    const localData = localStorage.getItem("email");
    return localData ? JSON.parse(localData) : "";
  });

  // const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(showEmail));
  }, [showEmail]);
  const handleShowClick = () => setShowPassword(!showPassword);

  const handleClick = (e) => {
    if (showEmail.length <= 0) {
      alert("Required");
    } else {
      e.preventDefault();
      setShowEmail(e.target.value);
      setShowPassword(e.target.value);
    }
  };

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="balck"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
          // backgroundColor="whiteAlpha.200"
        >
          <Avatar bg="pink.900" />
          <Heading color="pink.200">Welcome</Heading>
          <Box minW={{ base: "90%", md: "400px" }}>
            <form>
              <Stack
                spacing={3}
                p="1rem"
                // backgroundColor="whiteAlpha.50"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="pink" />}
                    />
                    <Input
                      onChange={(e) => {
                        setShowEmail(e.target.value);
                      }}
                      placeholder="email address"
                    />
                    {/* {console.log(showEmail)}; */}
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="pink" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => {
                        setShowPassword(e.target.value);
                      }}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        color="pink"
                        onClick={handleShowClick}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right" color="pink">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="pink"
                  width="full"
                  onClick={handleClick}
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box color="pink.200">
          New to us?{" "}
          <Link color="pink.800" href="#">
            Sign Up
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default App;
