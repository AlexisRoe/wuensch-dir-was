import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { addNewList } from '../api/lists';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Headline = styled.h1`
  color: #e8b7d5;
`;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  color: #c22f91;
`;

const InputName = styled.input`
  margin-bottom: 2rem;
  color: #c22f91;
  border: 1px solid #c22f91;
  background: none;
`;

const InputWish = styled.textarea`
  margin-bottom: 2rem;
  height: 10rem;
  color: #c22f91;
  border: 1px solid #c22f91;
`;

export default function AddPage() {
  const history = useHistory();
  const [name, setName] = useState(null);
  const [wishes, setWishes] = useState(null);

  function handleName(event) {
    setName(event.target.value);
  }

  function handleWishes(event) {
    setWishes(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const content = {
      title: name,
      wishes: wishes.split('\n'),
    };
    addNewList(content);
    history.push('/');
  }

  return (
    <Container>
      <Button onClick={() => history.push('/')}>◁</Button>
      <Headline>Füge einen neuen Wunsch ein</Headline>
      <AddForm onSubmit={handleSubmit}>
        <label htmlFor="name">Für wenn ist die Liste?</label>
        <InputName
          type="text"
          name="name"
          id="name"
          required
          autofocus
          onChange={handleName}
        />

        <label htmlFor="wishes">Was sind deine Wünsche</label>
        <InputWish
          name="wishes"
          id="wishes"
          cols="50"
          onChange={handleWishes}
        />

        <input type="submit" value="Anlegen" />
      </AddForm>
    </Container>
  );
}
