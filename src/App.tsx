import {
  Box,
  Button,
  Grid,
  GridItem,
  IconButton,
  Text,
  Alert,
  Show,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import React Icons
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { BsArrowUpSquareFill } from "react-icons/bs";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  const visibleItems = isExpanded ? items : items.slice(0, 3);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem area="aside" paddingX={5}>
            <Box>
              <List spacing={2}>
                {visibleItems.map((item, index) => (
                  <ListItem
                    key={index}
                    padding={2}
                    borderRadius="md"
                    _hover={{ bg: "gray.400" }}
                    transition="all 0.2s"
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
              {items.length > 3 && (
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="outline"
                  width="full"
                  mt={4}
                  rightIcon={
                    isExpanded ? (
                      <ChevronUpIcon boxSize="20px" />
                    ) : (
                      <ChevronDownIcon boxSize="20px" />
                    )
                  }
                  colorScheme="blue"
                  size="sm"
                  _hover={{
                    bg: "blue.50",
                    _dark: {
                      bg: "blue.800",
                    },
                  }}
                >
                  {isExpanded ? "Show Less" : `Show More`}
                </Button>
                // <IconButton
                //   aria-label={isExpanded ? "Show less" : "Show more"}
                //   icon={
                //     isExpanded ? (
                //       "Show less" + <BsArrowUpSquareFill />
                //     ) : (
                //       <BsArrowDownSquareFill />
                //     )
                //   }
                //   onClick={() => setIsExpanded(!isExpanded)}
                //   variant="ghost"
                //   width="full"
                //   mt={2}
                //   _hover={{ bg: "gray.100" }}
                //   color="gray.500"
                //   transition="all 0.2s"
                // />
              )}
            </Box>
          </GridItem>
        </Show>
        <GridItem area="main">
          // Examples of using the new colors
          <Box bg="blue.500" color="white">
            Blue box
          </Box>
          <Box bg="teal.200">Teal box</Box>
          <Button colorScheme="purple">Purple Button</Button>
          <Text color="orange.600">Orange text</Text>
          <Alert status="error" bg="red.50">
            Error message
          </Alert>
          // Using semantic colors
          <Button bg="primary">Primary Button</Button>
          <Box bg="secondary">Secondary Box</Box>
          <Alert status="success" bg="success">
            Success message
          </Alert>
        </GridItem>
      </Grid>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
