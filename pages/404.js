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
      <Heading as="h1">No encontrado</Heading>
      <Text>La pagina no ha sido encontrada...</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Retornar a la pagina principal</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound