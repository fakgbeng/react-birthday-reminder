import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [deleteItems, setDeleteItems] = useState(true);

  const onRemoveHandler = () => {
    setDeleteItems(false);
    // setDeleteItems((prevEvent) => {
    //   return (prevEvent = !prevEvent);
    // });
  };
  const onRetrieveHandler = () => {
    setDeleteItems(true);
  };

  return (
    <main>
      <List
        data={deleteItems ? data : []}
        onRemove={onRemoveHandler}
        onRetrieve={onRetrieveHandler}
      />
    </main>
  );
}

export default App;
