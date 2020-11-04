import { Link, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import styled from 'styled-components';
import Button from '../components/Button';

import { getListsByID } from '../api/lists';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Headline = styled.h1`
  color: #e8b7d5;
`;

export default function DetailPage() {
  const { id } = useParams();

  const [list, setList] = useState(null);

  useEffect(async () => {
    const newTitle = await getListsByID(id);
    setList(newTitle);
  }, []);

  if (list) {
    return <div>Loading ...</div>;
  }

  // spart list?.title, denn wenn nix da ist, gibt es einen loading state

  return (
    <Container>
      <Link to="/">
        <Button>◁</Button>
      </Link>
      <Headline>{list.title}´s Wunschliste</Headline>
      <ul>
        {list.wishes.map((wish) => (
          <li key={wish}>{wish}</li>
        ))}
      </ul>
    </Container>
  );
}
