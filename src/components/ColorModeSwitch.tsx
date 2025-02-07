import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack>
        {colorMode === "dark" ? (
          <MoonIcon onClick={toggleColorMode} cursor="pointer" boxSize="25px" />
        ) : (
          <SunIcon onClick={toggleColorMode} cursor="pointer" boxSize="25px" />
        )}
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
