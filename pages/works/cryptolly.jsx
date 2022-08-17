import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/works'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="cryptolly">
    <Container>
      <Title>
        Cryptolly <Badge>2022</Badge>
      </Title>
      <P>This project is a landing page dedicated to a crypto project that would allow convenient trading and asset management in cryptocurrency (which, this project would like to become, in fact).</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, MacOS, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, TypeScript, styled-components</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2022/08/17</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
