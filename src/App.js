import './App.css';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <TodoList />
    </DarkModeProvider>
  );
}

export default App;
