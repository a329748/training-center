import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import "@fontsource/bebas-neue/400.css"
import "@fontsource/source-sans-pro/600.css"

const theme = extendTheme({
  fonts: {
    heading: 'Bebas Neue, sans-serif',
    body: 'Source Sans Pro',
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
	    	<App/>
	    </ChakraProvider>
	</React.StrictMode>
);