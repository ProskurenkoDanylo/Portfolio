import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/works'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="todo">
    <Container>
      <Title>
        Todo App <Badge>2022</Badge>
      </Title>
      <P>A todo application. Builded with React, Material UI and framer-motion.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, MacOS, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Material UI, framer-motion</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2022/02/12</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
