import React from 'react';

interface Props {
  status: 'married';
}

const Header: React.FC<Props> = ({ status }) => {
  return <div>{status}</div>;
};

export default Header;
