import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { Single } from './components/Single';
import JsonTodo from './components/JsonTodo';
import SelectItems from './components/SelectItems';

function App() {
  return (
    <div className="App">
      <SelectItems></SelectItems>
      {/* <JsonTodo></JsonTodo> */}
     {/* <Todo></Todo>
     <Single></Single> */}
    </div>
  );
}

export default App;
