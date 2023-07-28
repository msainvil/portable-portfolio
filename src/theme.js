// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// 3. Define your custom color
const colors = {
  brand: {
    50: "#121d40", // Lighter color
    900: "#080e21", // Darker color
  },
}

// 4. extend the theme
const theme = extendTheme({ config, colors });

export default theme;
