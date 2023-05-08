import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  border: 1px solid var(--color-border);
  margin: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;
const Button = styled.button`
  width: 75px;
  font-weight: bold;
  color: var(--color-white);
  background: var(--color-accent);
  border: none;
  cursor: pointer;
  height: 100%;
`;
const Input = styled.input`
  flex: 1 0 auto;
  border: none;
  height: 40px;
  padding: 0 8px;
  line-height: 1.6;
  background: var(--color-bg);
  color: var(--color-text);
`;

export default function TodoInsert({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, done: false });
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Add Todo'
        title='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <Button>ADD</Button>
    </Form>
  );
}
