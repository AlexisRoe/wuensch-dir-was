import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Headline = styled.h1`
  color: #e8b7d5;
`;

export default function DetailPage() {
  const { id } = useParams();
  return (
    <Container>
      <Link to="/">
        <Button>◁</Button>
      </Link>
      <Headline>Dies ist die Detail-Seite von: {id.replace('_', ' ')}</Headline>
    </Container>
  );
}
