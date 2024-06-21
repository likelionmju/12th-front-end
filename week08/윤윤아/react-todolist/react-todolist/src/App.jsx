import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef, useReducer } from 'react';

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "멋쟁이사자처럼",
        date: new Date().getTime()
    },
    {
        id: 1,
        isDone: false,
        content: "아기사자",
        date: new Date().getTime()
    },
    {
        id: 2,
        isDone: false,
        content: "리액트 공부중",
        date: new Date().getTime()
    }
]

const reducer = (state, action) => {
    switch(action.type) {
        case 'create':
            return [action.newTodo, ...state];
        case 'update':
            return state.map((todo) => todo.id === action.targetId ? {...todo, isDone: !todo.isDone} : todo)
        case 'delete':
            return state.filter((todo) => todo.id != action.targetId)
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, mockData)
    const idRef = useRef(3); //초기 id값이 mockData의 id와 겹치지 않도록 설정

    
    const onCreate = (content) => {
        dispatch({
            type: 'create',
            newTodo: {
            id: idRef.current++, //초기 id 값이 mockData의 id와 겹치지 않도록 설정
            isDone: false,
            content: content,
            date: new Date().getTime()
            }// 함수에 전달해줄 값
        })
    }

    const onUpdate = (targetId) => {
        dispatch({type: 'update', targetId: targetId})
    }

    const onDelete = (targetId) => {
        dispatch({type: 'delete', targetId: targetId})
    }
    
    // const onCreate = (content) => {
    //     //객체 생성
    //     const newTodo = {
    //         id: idRef.current++, //초기 id 값이 mockData의 id와 겹치지 않도록 설정
    //         isDone: false,
    //         content: content,
    //         date: new Date().getTime()
    //     };
    //     //위에서 만든 객체를 todos 배열에 추가
    //     setTodos([newTodo, ...todos]);
    // };
    
    // const onUpdate = (targetId) => {
    //     setTodos(
    //         todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo)
    //     );
    // };

    // const onDelete = (targetId) => {
    //     setTodos(
    //         todos.filter((todo) => todo.id != targetId)
    //     )
    // }

    //state의 초기값을 mockData로 설정
    // const [todos, setTodos] = useState(mockData);

    return(
        <div className='App'>
            <Header />
            <Editor onCreate={onCreate} />
            <List
            todos={state}
            onUpdate={onUpdate}
            onDelete={onDelete}
            />
        </div>
    );
};

export default App;