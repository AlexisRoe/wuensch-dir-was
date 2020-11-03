import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Headline = styled.h1`
  color: #e8b7d5;
`;

export default function AddPage() {
  return (
    <Container>
      <Link to="/">
        <Button>◁</Button>
      </Link>
      <Headline>Füge einen neuen Wunsch ein</Headline>
    </Container>
  );
}
