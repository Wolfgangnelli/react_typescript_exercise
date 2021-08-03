import React from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'


const App: React.FC = () => {
  const todos = [{id: 't1', text: 'Finish the course'}];

  const todoAddHandler = (text: string) => {
    console.log(text);
   /*  const newTodo = new Todo(`t${todos.length+1}`, text);
    todos.push(newTodo); */

  }

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
