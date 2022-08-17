import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbBrainGames from '../public/images/thumbnail-braingames.png'
import thumbDevFinder from '../public/images/thumbnail-devfinder.png'
import thumbTodo from '../public/images/thumbnail-todo.png'
import thumbCryptolly from '../public/images/thumbnail-cryptolly.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="cryptolly"
              title="Cryptolly"
              thumbnail={thumbCryptolly}
            >
              This project is a landing page dedicated to a crypto project that would allow convenient trading and asset management in cryptocurrency (which, this project would like to become, in fact).
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="devfinder"
              title="Devfinder"
              thumbnail={thumbDevFinder}
            >
              A simple application that allows you to find information about
              anyone's profile on GitHub.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="todoapp" title="Todo App" thumbnail={thumbTodo}>
             A todo application. Builded with React, Material UI and framer-motion
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="braingames"
              title="Brain games"
              thumbnail={thumbBrainGames}
            >
              A simple console app on Python
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
