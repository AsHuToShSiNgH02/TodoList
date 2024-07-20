import './App.css';
import Todo from './Todo';

function App() {
  const todos = [{data: 'todo1', id: 301},{data: 'todo2', id: 302},{data: 'todo3', id: 303}];
  return (
    <div className="App">
      <Todo todoList = {todos}/>
    </div>
  );
}

export default App;
