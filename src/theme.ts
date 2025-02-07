import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// You choose initial value.
// App subscribes to system color mode changes.

const config = {
  initialColorMode: "light", // 'dark' | 'light'
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "white",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    // Adding blue shades
    blue: {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
    },
    // Adding teal shades
    teal: {
      50: "#e0f2f1",
      100: "#b2dfdb",
      200: "#80cbc4",
      300: "#4db6ac",
      400: "#26a69a",
      500: "#009688",
      600: "#00897b",
      700: "#00796b",
      800: "#00695c",
      900: "#004d40",
    },
    // Adding purple shades
    purple: {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
    },
    // Adding orange shades
    orange: {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
    },
    // Adding green shades
    green: {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
    },
    // Adding red shades
    red: {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
    },
  },
  // Adding custom semantic colors
  semanticTokens: {
    colors: {
      // Background colors
      background: {
        default: "white",
        _dark: "gray.800",
      },
      // Text colors
      text: {
        default: "gray.800",
        _dark: "whiteAlpha.900",
      },
      // Primary colors
      primary: {
        default: "blue.500",
        _dark: "blue.200",
      },
      // Secondary colors
      secondary: {
        default: "teal.500",
        _dark: "teal.200",
      },
      // Accent colors
      accent: {
        default: "purple.500",
        _dark: "purple.200",
      },
      // UI element colors
      border: {
        default: "gray.200",
        _dark: "gray.600",
      },
      hover: {
        default: "gray.100",
        _dark: "gray.700",
      },
    },
  },
  // Adding custom component styles
  components: {
    // ListItem styles that change with theme
    ListItem: {
      baseStyle: (props: { colorMode: string }) => ({
        bg: props.colorMode === "dark" ? "whiteAlpha.200" : "gray.100",
        _hover: {
          bg: props.colorMode === "dark" ? "whiteAlpha.300" : "gray.200",
        },
      }),
    },
    // Button styles that change with theme
    Button: {
      baseStyle: (props: { colorMode: string }) => ({
        bg: props.colorMode === "dark" ? "whiteAlpha.200" : "gray.100",
        _hover: {
          bg: props.colorMode === "dark" ? "whiteAlpha.300" : "gray.200",
        },
      }),
    },
    // Card styles that change with theme
    Card: {
      baseStyle: (props: { colorMode: string }) => ({
        bg: props.colorMode === "dark" ? "gray.700" : "white",
        borderColor: props.colorMode === "dark" ? "gray.600" : "gray.200",
      }),
    },
  },
});

export default theme;
