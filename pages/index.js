import NextLink from 'next/link'
import { Link, List, ListItem, Icon, Button, Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoFacebook, IoLogoGoogle } from 'react-icons/io5'
import { Progress } from '@chakra-ui/react'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center">
          Hola, soy un Desarrollador de Frontend con sede en Bolivia
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ivan Martinez
            </Heading>
            <p>Artesano Digital (Artista/Desarrollador/Diseñador)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ivan.jpg"
              alt="Imagen de perfil"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Ocupación
          </Heading>
          <Paragraph>
            Ivan es un desarrollador independiente de fronted que reside en Bolivia. Con una pasión por construir servicios digitales. Tiene un don
            para todo lo relacionado con el lanzamiento de productos, desde la planificación y el diseño hasta el lanzamiento. Le encanta resolver problemas de la vida real con código.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Mi portafolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biografia
          </Heading>
          <BioSection>
            <BioYear>1992</BioYear>
            Nacido en Sucre, Bolivia.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Estudió en Ingenieria de Sistemas en la Universidad San Francisco Xavier de Chuquisaca.
          </BioSection>
          <BioSection>
            <BioYear>2019 al presente</BioYear>
            Trabajando como Freelance
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Programacion, Arte, Musica, Origami, Tocar la guitarra electrica Machine Learning.
          </Paragraph>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Habilidades
          </Heading>
          <Paragraph>
            Javascript
          </Paragraph>
          <Progress value={80} size="sm" />
          <Paragraph>
            React
          </Paragraph>
          <Progress value={50} size="sm" />
          <Paragraph>
            Nextjs
          </Paragraph>
          <Progress value={40} size="sm" />
          <Paragraph>
            Chakra UI
          </Paragraph>
          <Progress value={30} size="sm" />
          <Paragraph>
            Framer Motion
          </Paragraph>
          <Progress value={20} size="sm" />
          <Paragraph>
            Three.js
          </Paragraph>
          <Progress value={40} size="sm" />
          <Paragraph>
            PHP
          </Paragraph>
          <Progress value={70} size="sm" colorScheme='orange' />
          <Paragraph>
            Laravel
          </Paragraph>
          <Progress value={80} size="sm" colorScheme='orange' />
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            En la web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://www.facebook.com/0ivanmartinez" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}>0ivanmartinez</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/jesulim" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}>@jesulim</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:jesulim@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGoogle} />}>jesulim@gmail.com</Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Publicaciones Populares
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default Page 
