import React, {useState} from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import {Todo} from './models/todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: `t${todos.length+1}`, text}]);
  }

  const todoDeleteHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList todos={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
}

export default App;
