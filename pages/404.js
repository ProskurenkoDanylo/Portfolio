import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you're are looking is not exist</Text>
      <Divider my={5} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home page</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
