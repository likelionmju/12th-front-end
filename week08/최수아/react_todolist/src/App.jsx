import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useRef, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      const newTodo = action.data;
      return (
        [newTodo, ...state]
      );

    case 'UPDATE':
      return (
        state.map((todo) => 
          todo.id === action.targetId
          ? { ...todo, isDone : !todo.isDone} : todo
        )
      );
    
      case 'DELETE':
        return state.filter((todo) => todo.id !== action.targetId);

    default:
      return state;
  }
}

// 초기값은 가독성을 위해 App 밖에 두기
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "멋쟁이사자처럼",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "아기사자",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "리액트 공부중",
    date: new Date().getTime(),
  }, 
  ]

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date(). getTime()
      }
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App;
