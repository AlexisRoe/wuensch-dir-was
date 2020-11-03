import styled from 'styled-components';

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
      <Headline>Füge einen neuen Wunsch ein</Headline>
    </Container>
  );
}
