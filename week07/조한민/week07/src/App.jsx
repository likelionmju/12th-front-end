import { useState } from 'react';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

function App() {
  // const [state, setState] = useState(0);
  const [state, setState] = useState(0);

  const onClickBTN = (value) => {
    setState(state + value);
  };

  return (
    <>
      <h1>simple counter</h1>
      <Viewer state={state} />
      <Controller onClickBTN={onClickBTN} />
    </>
  );
}

export default App;
