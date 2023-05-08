import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoInsert from './TodoInsert';
import TodoHeader from './TodoHeader';
import TodoFilters from './TodoFilters';

const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  overflow-y: scroll;
`;
const List = styled.ul`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0.5rem 1rem;
`;

export default function TodoList() {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);
  const [filter, setFilter] = useState('All');
  const handleAdd = (addTodo) => setTodos([...todos, addTodo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((el) => (el.id === updated.id ? updated : el)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((el) => deleted.id != el.id));
  const handleFilter = (filter) => setFilter(filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const getFilteredTodos = (filter) => {
    if (filter === 'All') {
      return todos;
    } else if (filter === 'Active') {
      return todos.filter((todo) => !todo.done);
    } else if (filter === 'Complete') {
      return todos.filter((todo) => todo.done);
    }
  };
  const filteredTodo = getFilteredTodos(filter);

  return (
    <>
      <TodoHeader onFilter={handleFilter} />
      <TodoFilters onFilter={handleFilter} />
      <Container>
        <List>
          {filteredTodo.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </List>
      </Container>
      {/* 투두 인서트 */}
      <TodoInsert onAdd={handleAdd} />
    </>
  );
}
function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
