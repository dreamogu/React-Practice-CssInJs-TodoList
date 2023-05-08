import React from 'react';
import styled from 'styled-components';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { useDarkMode } from '../context/DarkModeContext';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem 0;
`;

const Title = styled.h1`
  font-weight: bold;
  color: var(--color-text);
  margin-top: 0.2rem;
  font-size: 1.5rem;
`;
const TodoDate = styled.div`
  color: var(--color-gray);
  font-size: 0.8rem;
`;
const ModeButton = styled.button`
  background: var(--color-mode);
  width: 40px;
  height: 40px;
  color: #fff;
  border: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    width: 25px;
    height: 25px;
  }
`;
export default function TodoHeader() {
  let date = new Date();
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <Header>
      <div>
        <TodoDate>{date.toLocaleDateString()}</TodoDate>
        <Title>ToDo List</Title>
      </div>
      <ModeButton onClick={() => toggleDarkMode()}>
        {darkMode ? <RiSunLine /> : <RiMoonClearLine />}
      </ModeButton>
    </Header>
  );
}
