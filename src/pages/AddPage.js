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
  const [title, setTitle] = useState('');
  const [wishes, setWishes] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleWishes(event) {
    setWishes(event.target.value.split('\n'));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const list = {
      title,
      wishes,
    };

    try {
      setLoading(true);
      setErrMessage(null);
      const newList = await addNewList(list);
      // setTitle('');
      // setWishes('');
      // setLoading(false);
      history.push(`/details/${newList.id}`);
    } catch (err) {
      setLoading(false);
      setErrMessage(err.message);
    }
  }

  return (
    <Container>
      <Button onClick={() => history.push('/')}>◁</Button>
      <Headline>Füge einen neuen Wunsch ein</Headline>
      <AddForm onSubmit={handleSubmit}>
        <label htmlFor="title">Für wenn ist die Liste?</label>
        <InputName
          type="text"
          name="title"
          id="title"
          value={title}
          required
          autoFocus
          onChange={handleTitle}
        />

        <label htmlFor="wishes">Was sind deine Wünsche</label>
        <InputWish
          name="wishes"
          id="wishes"
          // value={wishes}
          cols="50"
          required
          onChange={handleWishes}
        />

        <input type="submit" value="Anlegen" disabled={loading} />
      </AddForm>

      {loading && <div>Loading ...</div>}
      {errMessage && <div>A error accured, sorry</div>}
    </Container>
  );
}
