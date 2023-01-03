import { Text } from '$/components/Text';
import { Songs } from '$/features/SongsList/View';

import { Container, Content, SearchInput } from './styles';

function HomeView(): JSX.Element {
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <Content>
        <Text tag="h2" variant="title1">
          Featured songs
        </Text>
        <Songs />
      </Content>
    </Container>
  );
}

export default HomeView;
