import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/works'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="todo">
    <Container>
      <Title>
        Todo App <Badge>2020</Badge>
      </Title>
      <P>A simple Todo App that helps to control your time management.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, MacOS, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2020/08/20</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
