import Head from "next/head";
import Navbar from "../navbar";
import NoSsr from "../no-ssr";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import VoxelDog from "../voxel-dog";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ivan's homepage" />
        <meta name="author" content="Ivan Martinez" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        {/* <link rel="icon" href="favicon.ico" type="image" /> */}
        <meta property="og:site_name" content="Ivan Martinez's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Ivan Martinez - Homepage</title>
      </Head>

      <Navbar path={router.path} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>

        {children}

        <Footer />
      </Container>
    </Box>

  )
}

export default Main