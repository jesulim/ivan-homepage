import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem} from '../components/grid-item'

import thumbProductividad from '../public/images/contents/productividad.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publicaciones Preferidas
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="20 Tips de Productividad"
            thumbnail={thumbProductividad}
            href="https://dev.to/actitime/20-productivity-tips-from-developers-to-developers-3bnc" />
        </SimpleGrid>
      </Section>
      
    </Container>
  </Layout>
)

export default Posts