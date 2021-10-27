import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Button,
  Image,
  useColorModeValue, ListItem, List, Link, Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioYear, BioSection } from '../components/bio'
import { IoLogoGithub, IoPaperPlane, IoLogoFacebook } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          color={useColorModeValue('gray200', 'whiteApha.900')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I am a front-end developer!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Proskurenko Danylo
            </Heading>
            <p>Student of NURE. Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAplha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/proskurenko.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Danylo is a student and front-end developer based on Kharkiv. He
            knows how to develop any project from its conception to
            implementation. He does not like to stand still, so in his free time
            away from coding, Danylo is most often engaged in self-development.
            Currently he learns React and all about it.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Kherson, Ukraine.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated from Kherson Polytechnical College
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Student of NURE.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I like
          </Heading>
          <Paragraph>Art, Music, Machine Learning, Play logic games</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/proskurenkodanylo" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                  @proskurenkodanylo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/shrlck" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoPaperPlane}/>}>
                  @shrlck
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.facebook.com/proskurenko.danylo/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook}/>}>
                  @proskurenko.danylo
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
