import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  height: 100px;
  border-radius: 16px 0 16px 0;
  box-shadow: var(--box-shadow);
  padding: 1rem;
  background: var(--color-list);
`;
const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`;
const Label = styled.label`
  flex: 1;
  margin-left: 1rem;
  color: var(--color-text);
`;
const BtnContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: 1s;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  color: var(--color-text);
  &:not(:first-of-type) {
    margin-left: 4px;
  }
  &:hover {
    background: var(--color-accent);
    color: var(--color-white);
  }
`;

export default function TodoItem({ todo, onUpdate, onDelete, onEdit }) {
  const { id, text, done } = todo;
  const handleChange = (e) => {
    const done = e.target.checked ? true : false;
    onUpdate({ ...todo, done });
  };
  const handleEdit = () => {
    onEdit(todo);
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <ListItem>
      <Checkbox
        type='checkbox'
        id={id}
        checked={done === true}
        onChange={handleChange}
      />
      <Label htmlFor={id}>{text}</Label>
      <BtnContainer>
        <Button
          role='수정하기'
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button
          role='삭제하기'
          onClick={handleDelete}
        >
          Delete
        </Button>
      </BtnContainer>
    </ListItem>
  );
}
