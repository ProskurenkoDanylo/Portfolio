import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/works'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="todo">
    <Container>
      <Title>
        Brain-games <Badge>2019</Badge>
      </Title>
      <P>A simple console math games app written with Python.</P>
      <P>
        Games: find GCD, calculate numbers, define is number is prime, define is
        number is even, find missing number in progression
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
