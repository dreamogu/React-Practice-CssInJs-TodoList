import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: var(--color-gray);
  border: 2px solid transparent;
  &:not(:first-of-type) {
    margin-left: 1rem;
  }
  &.selected {
    color: var(--color-accent);
    font-weight: bold;
    border-bottom: 2px solid var(--color-accent);
  }
`;

export default function TodoFilters({ onFilter }) {
  const filters = ['All', 'Active', 'Complete'];
  const [selected, setSelected] = useState('All');
  const handleClick = (filtered) => {
    setSelected(filtered);
    onFilter(filtered);
  };
  return (
    <Nav>
      {filters.map((item, idx) => (
        <Button
          key={idx}
          className={`${item === selected ? 'selected' : ''}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </Button>
      ))}
    </Nav>
  );
}
