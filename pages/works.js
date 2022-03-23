import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbTenzies from '../public/images/works/tenzies.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Proyectos
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
          <GridItem
            title="Tenzies"
            thumbnail={thumbTenzies}
            href="https://jesulim.github.io/project-tenzies/" />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works