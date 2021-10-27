import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/works'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="todo">
    <Container>
      <Title>
        DevFinder <Badge>2021</Badge>
      </Title>
      <P>
        A simple application that allows you to find information about anyone's
        profile on GitHub.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, MacOS, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2021/10/22</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
