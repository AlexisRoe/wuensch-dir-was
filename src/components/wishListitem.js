import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = styled.li`
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px #c22f91;
  border: 1px solid #992572;
  color: #c22f91;
  list-style: none;
`;

export default function WishListitem({ id, title }) {
  return (
    <>
      <Link to={`details/${id}`}>
        <Item>{title}</Item>
      </Link>
    </>
  );
}

WishListitem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
