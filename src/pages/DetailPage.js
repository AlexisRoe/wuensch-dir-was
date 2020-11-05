import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { deleteListbyID, getListsByID } from '../api/lists';
import Button from '../components/Button';
import DeleteButton from '../components/DeleteButton';

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
  const history = useHistory();

  useEffect(async () => {
    const newTitle = await getListsByID(id);
    setList(newTitle);
  }, []);

  // spart list?.title, denn wenn nix da ist, gibt es einen loading state
  if (!list) {
    return <div>Loading ...</div>;
  }

  const handleDelete = async () => {
    await deleteListbyID(id);
    history.push('/');
  };

  return (
    <Container>
      <Button onClick={() => history.push('/')}>◁</Button>
      <Headline>{list.title}´s Wunschliste</Headline>
      <ul>
        {list.wishes.map((wish) => (
          <li key={wish}>{wish}</li>
        ))}
      </ul>
      <DeleteButton onClick={() => handleDelete()}>X</DeleteButton>
    </Container>
  );
}
