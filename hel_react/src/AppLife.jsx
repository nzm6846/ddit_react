import Life01 from "./Life01.jsx";
import Life02 from "./Life02.jsx";
import { useState } from "react";

function App() {
  const [flag_life, setFlagLife] = useState(true);

  const myClick = () => {
    setFlagLife(!flag_life);
  };

  let content; // JSX 밖에서 먼저 선언

  if (flag_life) {
    content = <Life01 />;
  } else {
    content = <Life02 />;
  }

  return (
    <>
      {content}<br/>
      <button onClick={myClick}>toggle</button>
    </>
  );
}

export default App;
