// css  파일을 불러오는 형식
import "./App.css";
// components를 불러올 형식 <import 컴포넌트명 from "">
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div classname="app">
      <h1> Simple Counter</h1>
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} />
    </div>
  );
}

export default App;
