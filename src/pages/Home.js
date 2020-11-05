import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Button from '../components/Button';
import Wishlistitem from '../components/wishListitem';

import { getLists } from '../api/lists';

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function AddPage() {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  if (!lists) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <ListContainer>
        {lists.map((list) => (
          <Wishlistitem key={list.id} id={list.id} title={list.title} />
        ))}
      </ListContainer>
      <Link to="/addList">
        <Button>+</Button>
      </Link>
    </>
  );
}
