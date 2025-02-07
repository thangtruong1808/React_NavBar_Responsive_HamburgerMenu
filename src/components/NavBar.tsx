import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  useBreakpointValue,
  space,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { PiShoppingCartLight } from "react-icons/pi";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const platformItems = ["platform1", "platform2", "platform3", "platform4"];

  // Use breakpointValue to determine if we're in mobile view
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Menu Items Component to avoid repetition
  const MenuItems = ({ isDrawer = false }) => (
    <>
      <Link href="#" gap="20px" _hover={{ textDecoration: "none" }}>
        Home
      </Link>
      {/* Menu 1 */}
      <Menu>
        <MenuButton as={Link} href="#" _hover={{ textDecoration: "none" }}>
          <Box display="flex" whiteSpace={"nowrap"}>
            Genres <ChevronDownIcon margin={1} />
          </Box>
        </MenuButton>
        <MenuList>
          {platformItems.map((item, index) => (
            <MenuItem key={index} onClick={() => console.log(item)}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      {/* Menu 2 */}
      <Menu>
        <MenuButton as={Link} href="#" _hover={{ textDecoration: "none" }}>
          <Box display="flex" whiteSpace={"nowrap"}>
            Platform <ChevronDownIcon margin={1} />
          </Box>
        </MenuButton>
        <MenuList>
          {platformItems.map((item, index) => (
            <MenuItem key={index} onClick={() => console.log(item)}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      {/* Menu 3 */}
      <Menu>
        <MenuButton as={Link} href="#" _hover={{ textDecoration: "none" }}>
          <Box display="flex" whiteSpace={"nowrap"}>
            Order by {<ChevronDownIcon margin={1} />}
          </Box>
        </MenuButton>
        <MenuList>
          {platformItems.map((item, index) => (
            <MenuItem key={index} onClick={() => console.log(item)}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      {/* {isDrawer && (
        <>
          <VStack gap="20px">
            <PiShoppingCartLight size="30px" />
            <ColorModeSwitch />
          </VStack>
        </>
      )} */}
    </>
  );
  return (
    <>
      <HStack justifyContent={"space-between"} padding={{ base: 2, md: 8 }}>
        {/* Logo  */}
        <Image src={logo} boxSize="40px" />

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <Box
              display="flex"
              gap="20px"
              justifyContent="space-evenly"
              alignItems="center" // Add this line
            >
              <MenuItems />
            </Box>

            {/* <MenuItems /> */}

            <Box display="flex" width={"50%"}>
              <SearchInput />
            </Box>
            <Box
              display="flex"
              // justifyContent="space-evenly"
              alignItems="center"
              gap={6}
            >
              <PiShoppingCartLight size="30px" />
              <ColorModeSwitch />
            </Box>
          </>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Box
            display="flex"
            width={"100%"}
            justifyContent="space-between"
            gap="20px"
          >
            <SearchInput />
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon boxSize="40px" />}
              onClick={onOpen}
              variant="ghost"
            />

            {/* <ColorModeSwitch /> */}
          </Box>
        )}
      </HStack>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <VStack align="stretch" spacing={4} flex="1">
              <MenuItems isDrawer={true} />
            </VStack>
            <Box mt="auto" pt={4}>
              <Divider mb={4} />
              <HStack justify="space-between" align="center">
                <PiShoppingCartLight size="30px" />
                <ColorModeSwitch />
              </HStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
