import React from 'react';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar.tsx';
import menuItem from './../menuItem.json'

const App:React.FC =() => {
 

  return (
    <ChakraProvider>
      <Container maxW="container.lg">
<Flex>
  <Sidebar data={menuItem} />
  {/*Main content area */}
  <div style={{flex: 1}}>
    <h1>Main Content</h1>
  </div>
</Flex>

      </Container>
    </ChakraProvider>
  )
}

export default App
