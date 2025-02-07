import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// You choose initial value.
// App subscribes to system color mode changes.

const config = {
  initialColorMode: "light", // 'dark' | 'light'
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
