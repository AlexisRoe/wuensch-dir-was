import styled from 'styled-components/macro';
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

export default function WishListitem({ title }) {
  return (
    <>
      <Item>{title}</Item>
    </>
  );
}

WishListitem.propTypes = {
  title: PropTypes.string.isRequired,
};
