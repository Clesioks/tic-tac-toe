import Cell from "./components/Cell.js";
import { useState } from "react";


const App = () => {

  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])

  console.log(cells)

  return (
    <div className="app">
      <div className="gameboard">
        <Cell />
      </div>
      <p></p>
    </div>
  );
}

export default App;
