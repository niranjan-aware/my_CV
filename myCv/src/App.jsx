import { Fragment, useState } from 'react'
import Navbar from './Component/Navbar'
import { Text,Stack } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
    <Navbar position></Navbar>
    <Stack spacing={3}>
  <Text fontSize='6xl'>(6xl) In love with React & Next</Text>
  <Text fontSize='5xl'>(5xl) In love with React & Next</Text>
  <Text fontSize='4xl'>(4xl) In love with React & Next</Text>
  <Text fontSize='3xl'>(3xl) In love with React & Next</Text>
  <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
  <Text fontSize='xl'>(xl) In love with React & Next</Text>
  <Text fontSize='lg'>(lg) In love with React & Next</Text>
  <Text fontSize='md'>(md) In love with React & Next</Text>
  <Text fontSize='sm'>(sm) In love with React & Next</Text>
  <Text fontSize='xs'>(xs) In love with React & Next</Text>
</Stack>
<Stack spacing={3}>
  <Text fontSize='6xl'>(6xl) In love with React & Next</Text>
  <Text fontSize='5xl'>(5xl) In love with React & Next</Text>
  <Text fontSize='4xl'>(4xl) In love with React & Next</Text>
  <Text fontSize='3xl'>(3xl) In love with React & Next</Text>
  <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
  <Text fontSize='xl'>(xl) In love with React & Next</Text>
  <Text fontSize='lg'>(lg) In love with React & Next</Text>
  <Text fontSize='md'>(md) In love with React & Next</Text>
  <Text fontSize='sm'>(sm) In love with React & Next</Text>
  <Text fontSize='xs'>(xs) In love with React & Next</Text>
</Stack>
    </Fragment>

  )
}

export default App
