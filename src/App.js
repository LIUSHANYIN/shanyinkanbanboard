import React, { useState } from "react";

import "./App.css";
import columnsDate from "./constant";
import Column from "./components/Column";

function App() {
  const [column, setColumn] = useState(columnsDate);

  const handleAddCard = (input, index) => {
    let newColumn = [...column];
    newColumn[index].cards.push({ title: input });
    setColumn(newColumn);
  };

  const handleMoveCard = (currentColumn, targetColumn, index) => {
    let newColumn = [...column];
    const moveCard = newColumn[currentColumn].cards.splice(index, 1)[0];
    newColumn[targetColumn].cards.push(moveCard);
    setColumn(newColumn);
  };
  const handleDelete = (index) => {
    const newColumn = [...column];
    newColumn[index].cards.splice(index, 1);
    setColumn(newColumn);
  };

  return (
    <div className="App">
      {column.map((column, i) => (
        <Column
          key={i}
          title={column.title}
          color={column.color}
          card={column.cards}
          addCard={handleAddCard}
          moveCard={handleMoveCard}
          index={i}
          dele={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
