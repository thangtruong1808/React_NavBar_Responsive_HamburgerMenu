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
  Divider,
} from "@chakra-ui/react";
import { PiShoppingCartLight } from "react-icons/pi";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// Separate navigation data into a constant
const NAVIGATION_ITEMS = [
  {
    label: "Genres",
    items: ["platform1", "platform2", "platform3", "platform4"],
  },
  {
    label: "Platform",
    items: ["platform1", "platform2", "platform3", "platform4"],
  },
  {
    label: "Order by",
    items: ["platform1", "platform2", "platform3", "platform4"],
  },
];

// Separate dropdown menu component
const DropdownMenu = ({ label, items }: { label: string; items: string[] }) => (
  <Menu>
    <MenuButton as={Link} href="#" _hover={{ textDecoration: "none" }}>
      <Box display="flex" whiteSpace="nowrap">
        {label} <ChevronDownIcon margin={1} />
      </Box>
    </MenuButton>
    <MenuList>
      {items.map((item, index) => (
        <MenuItem key={index} onClick={() => console.log(item)}>
          {item}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

// Separate navigation items component
const NavigationItems = () => (
  <>
    <Link href="#" gap="20px" _hover={{ textDecoration: "none" }}>
      Home
    </Link>
    {NAVIGATION_ITEMS.map((nav, index) => (
      <DropdownMenu key={index} label={nav.label} items={nav.items} />
    ))}
  </>
);

// Separate user actions component
const UserActions = () => (
  <Box display="flex" alignItems="center" gap={6}>
    <PiShoppingCartLight size="30px" />
    <ColorModeSwitch />
  </Box>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const DesktopNav = () => (
    <>
      <Box
        display="flex"
        gap="20px"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <NavigationItems />
      </Box>
      <Box display="flex" width="50%">
        <SearchInput />
      </Box>
      <UserActions />
    </>
  );

  const MobileNav = () => (
    <Box display="flex" width="100%" justifyContent="space-between" gap="20px">
      <SearchInput />
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon boxSize="40px" />}
        onClick={onOpen}
        variant="ghost"
      />
    </Box>
  );

  const MobileDrawer = () => (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Image src={logo} boxSize="40px" />
        </DrawerHeader>
        <DrawerBody display="flex" flexDirection="column">
          <VStack align="stretch" spacing={4} flex="1">
            <NavigationItems />
          </VStack>
          <Box mt="auto" pt={4}>
            <Divider mb={4} />
            <HStack justify="space-between" align="center">
              <UserActions />
            </HStack>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
      <HStack justifyContent="space-between" padding={{ base: 2, md: 8 }}>
        <Image src={logo} boxSize="40px" />
        {!isMobile ? <DesktopNav /> : <MobileNav />}
      </HStack>
      <MobileDrawer />
    </>
  );
};

export default NavBar;
