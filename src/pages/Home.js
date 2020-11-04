import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Wishlistitem from '../components/wishListitem';

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function AddPage() {
  return (
    <>
      <ListContainer>
        <Link to="/details/Martin_Luther">
          <Wishlistitem title="Martin Luther" />
        </Link>
        <Link to="/details/Lisa_Meier">
          <Wishlistitem title="Lisa Meier" />
        </Link>
        <Link to="/details/Franz">
          <Wishlistitem title="Franz" />
        </Link>
      </ListContainer>
      <Link to="/addList">
        <Button>+</Button>
      </Link>
    </>
  );
}
